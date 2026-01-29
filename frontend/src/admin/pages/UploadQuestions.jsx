import React, { useState, useMemo } from 'react';
import apiRequest from '../../utils/api';

const emptyQuestion = { category: 'general', difficulty: 'medium', question: '', options: ['', ''], answer: '' };

const UploadQuestions = () => {
  const [items, setItems] = useState([ { ...emptyQuestion } ]);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const itemErrors = useMemo(() => {
    return items.map((q) => {
      const errs = {};
      const category = (q.category || '').trim();
      const difficulty = (q.difficulty || '').trim().toLowerCase();
      const question = (q.question || '').trim();
      const options = (q.options || []).map(o => (o || '').trim()).filter(Boolean);
      const answer = (q.answer || '').trim();
      if (!category) errs.category = 'Category is required';
      if (!['easy','medium','hard'].includes(difficulty)) errs.difficulty = 'Difficulty must be easy, medium, or hard';
      if (!question) errs.question = 'Question is required';
      if (options.length < 2) errs.options = 'Provide at least 2 non-empty options';
      if (!answer) errs.answer = 'Answer is required';
      else if (!options.includes(answer)) errs.answer = 'Answer must match one of the options';
      return errs;
    });
  }, [items]);

  const allValid = useMemo(() => itemErrors.every(e => Object.keys(e).length === 0), [itemErrors]);

  const updateItem = (idx, field, value) => {
    const next = [...items];
    const val = typeof value === 'string' ? value : value;
    next[idx] = { ...next[idx], [field]: val };
    if (field === 'options') {
      // Reset answer if it no longer matches
      const trimmedOpts = val.map(o => (o || '').trim()).filter(Boolean);
      const ans = (next[idx].answer || '').trim();
      if (ans && !trimmedOpts.includes(ans)) next[idx].answer = '';
    }
    setItems(next);
    setError('');
    setStatus('');
  };

  const updateOption = (idx, optIdx, value) => {
    const opts = [...items[idx].options];
    opts[optIdx] = value;
    updateItem(idx, 'options', opts);
  };

  const addOption = (idx) => {
    const opts = [...items[idx].options, ''];
    updateItem(idx, 'options', opts);
  };

  const removeOption = (idx, optIdx) => {
    const opts = items[idx].options.filter((_, i) => i !== optIdx);
    updateItem(idx, 'options', opts);
  };

  const addQuestion = () => setItems(prev => ([ ...prev, { ...emptyQuestion } ]));
  const removeQuestion = (idx) => setItems(prev => prev.filter((_, i) => i !== idx));

  const submit = async () => {
    setError(''); setStatus('');
    if (!allValid) {
      setError('Fix validation errors before saving.');
      return;
    }
    try {
      const adminToken = localStorage.getItem('adminToken');
      const payload = items.map(q => ({
        category: (q.category || '').trim().toLowerCase(),
        difficulty: (q.difficulty || 'medium').trim().toLowerCase(),
        question: (q.question || '').trim(),
        options: (q.options || []).map(o => (o || '').trim()).filter(Boolean),
        answer: (q.answer || '').trim(),
      }));
      const res = await apiRequest('/admin/questions', {
        method: 'POST',
        headers: { Authorization: adminToken ? `Bearer ${adminToken}` : undefined },
        body: JSON.stringify(payload),
      });
      if (res.success) {
        setStatus(`Uploaded ${res.data?.count || payload.length} question(s) to server.`);
        setItems([ { ...emptyQuestion } ]);
      } else {
        setError(res.message || 'Upload failed');
      }
    } catch (e) {
      setError(e.message || 'Server error');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Upload Questions</h1>
      <p className="text-sm text-gray-600 mb-6">Create questions directly and save to server. No file needed.</p>

      {items.map((q, idx) => {
        const errs = itemErrors[idx];
        const trimmedOpts = (q.options || []).map(o => (o || '').trim());
        return (
          <div key={idx} className="border rounded p-4 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1">
                <label className="text-sm">Category</label>
                <input value={q.category} onChange={e => updateItem(idx, 'category', e.target.value)} className={`w-full px-3 py-2 border rounded ${errs.category ? 'border-red-400' : ''}`} placeholder="e.g. javascript" />
                {errs.category && <p className="text-xs text-red-600 mt-1">{errs.category}</p>}
              </div>
              <div className="w-48">
                <label className="text-sm">Difficulty</label>
                <select value={q.difficulty} onChange={e => updateItem(idx, 'difficulty', e.target.value)} className={`w-full px-3 py-2 border rounded ${errs.difficulty ? 'border-red-400' : ''}`}>
                  <option value="easy">easy</option>
                  <option value="medium">medium</option>
                  <option value="hard">hard</option>
                </select>
                {errs.difficulty && <p className="text-xs text-red-600 mt-1">{errs.difficulty}</p>}
              </div>
              <button onClick={() => removeQuestion(idx)} className="px-3 py-2 bg-red-500 text-white rounded">Remove</button>
            </div>
            <div className="mb-3">
              <label className="text-sm">Question</label>
              <textarea value={q.question} onChange={e => updateItem(idx, 'question', e.target.value)} rows={2} className={`w-full px-3 py-2 border rounded ${errs.question ? 'border-red-400' : ''}`} placeholder="Type your question" />
              {errs.question && <p className="text-xs text-red-600 mt-1">{errs.question}</p>}
            </div>
            <div className="mb-3">
              <label className="text-sm">Options</label>
              <div className="space-y-2">
                {q.options.map((opt, oi) => (
                  <div key={oi} className="flex items-center gap-2">
                    <input value={opt} onChange={e => updateOption(idx, oi, e.target.value)} className="flex-1 px-3 py-2 border rounded" placeholder={`Option ${oi+1}`} />
                    <button onClick={() => removeOption(idx, oi)} className="px-3 py-2 bg-gray-200 rounded">Remove</button>
                  </div>
                ))}
                <button onClick={() => addOption(idx)} className="px-3 py-2 bg-gray-100 border rounded">Add Option</button>
                {errs.options && <p className="text-xs text-red-600 mt-1">{errs.options}</p>}
              </div>
            </div>
            <div className="mb-3">
              <label className="text-sm">Answer</label>
              <select value={q.answer} onChange={e => updateItem(idx, 'answer', e.target.value)} className={`w-full px-3 py-2 border rounded ${errs.answer ? 'border-red-400' : ''}`}>
                <option value="">Select correct answer</option>
                {trimmedOpts.filter(Boolean).map((opt, oi) => (
                  <option key={oi} value={opt}>{opt}</option>
                ))}
              </select>
              {errs.answer && <p className="text-xs text-red-600 mt-1">{errs.answer}</p>}
            </div>
          </div>
        );
      })}

      <div className="flex gap-3 mb-4">
        <button onClick={addQuestion} className="px-4 py-2 bg-gray-100 border rounded">Add Question</button>
        <button onClick={submit} disabled={!allValid} className={`px-4 py-2 rounded text-white ${allValid ? 'bg-indigo-600' : 'bg-gray-400 cursor-not-allowed'}`}>Save to Server</button>
      </div>

      {status && <div className="text-green-600 mb-2">{status}</div>}
      {error && <div className="text-red-600 mb-2">{error}</div>}
    </div>
  );
};

export default UploadQuestions;