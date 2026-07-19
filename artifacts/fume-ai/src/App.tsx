import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  Settings,
  Sparkles,
  Loader2,
  LayoutDashboard,
  Apple,
  Activity,
  Moon,
  Droplets,
  HeartPulse,
  TrendingUp,
  Shield,
  CheckSquare,
  AlertCircle,
  MessageCircle,
  FileText,
  CheckCircle,
  Edit,
  XCircle,
  BrainCircuit,
  UserCheck,
  Search,
  EyeOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const FumeAIClientIntelligence = () => {
  const [inputText, setInputText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasAnalyzed, setHasAnalyzed] = useState(false);

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    // Simulate AI analysis delay
    setTimeout(() => {
      setIsAnalyzing(false);
      setHasAnalyzed(true);
    }, 2500);
  };

  const cardsData = [
    {
      title: 'Weekly Summary',
      icon: <LayoutDashboard className="w-5 h-5" />,
      content: 'Client had a productive week with consistent check-ins. Overall engagement was high with 4 out of 5 sessions completed.',
      accent: 'border-blue-500',
      iconBg: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Nutrition',
      icon: <Apple className="w-5 h-5" />,
      content: 'Client reported balanced meals 5 days this week. Protein intake remains below target. No major dietary concerns flagged.',
      accent: 'border-green-500',
      iconBg: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      title: 'Exercise & Steps',
      icon: <Activity className="w-5 h-5" />,
      content: 'Average 7,200 steps per day. Completed 3 strength sessions. One missed cardio session due to fatigue.',
      accent: 'border-emerald-500',
      iconBg: 'bg-emerald-50',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Sleep',
      icon: <Moon className="w-5 h-5" />,
      content: 'Average 6.4 hours per night, below the 7-8 hour target. Client reported difficulty falling asleep on 3 nights.',
      accent: 'border-indigo-500',
      iconBg: 'bg-indigo-50',
      iconColor: 'text-indigo-600',
    },
    {
      title: 'Water Intake',
      icon: <Droplets className="w-5 h-5" />,
      content: 'Client averaged 1.8L per day, slightly below the 2L target. Improvement noted compared to last week.',
      accent: 'border-cyan-500',
      iconBg: 'bg-cyan-50',
      iconColor: 'text-cyan-600',
    },
    {
      title: 'Symptoms & Stress',
      icon: <HeartPulse className="w-5 h-5" />,
      content: 'Mild stress reported mid-week due to work deadlines. No physical symptoms flagged. Mood generally stable.',
      accent: 'border-rose-500',
      iconBg: 'bg-rose-50',
      iconColor: 'text-rose-600',
    },
    {
      title: 'Engagement Level',
      icon: <TrendingUp className="w-5 h-5" />,
      content: 'High engagement this week. Client responded to all coach messages within 2 hours. Motivation appears strong.',
      accent: 'border-amber-500',
      iconBg: 'bg-amber-50',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Key Barriers',
      icon: <Shield className="w-5 h-5" />,
      content: 'Time constraints cited as primary barrier. Client also mentioned social eating challenges on weekends.',
      accent: 'border-orange-500',
      iconBg: 'bg-orange-50',
      iconColor: 'text-orange-600',
    },
    {
      title: 'Pending Actions',
      icon: <CheckSquare className="w-5 h-5" />,
      content: 'Client to complete food journal by Friday. Coach follow-up on sleep hygiene scheduled for next session.',
      accent: 'border-teal-500',
      iconBg: 'bg-teal-50',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Risk Flags',
      icon: <AlertCircle className="w-5 h-5" />,
      content: 'Mild sleep deprivation flagged. Monitor for signs of burnout. No critical health risks identified.',
      accent: 'border-red-500',
      iconBg: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      title: 'Recommended Coach Action',
      icon: <MessageCircle className="w-5 h-5" />,
      content: 'Prioritize a sleep-focused conversation in next session. Introduce a wind-down routine recommendation.',
      accent: 'border-violet-500',
      iconBg: 'bg-violet-50',
      iconColor: 'text-violet-600',
    },
    {
      title: 'Supporting Evidence',
      icon: <FileText className="w-5 h-5" />,
      content: '"I just haven\'t been sleeping well lately" — Session 3. "Work has been really stressful this week" — Session 4.',
      accent: 'border-slate-500',
      iconBg: 'bg-slate-100',
      iconColor: 'text-slate-600',
    },
  ];

  const classifications = [
    {
      title: 'Confirmed Facts',
      desc: 'Based on verifiable data and coach records',
      icon: <CheckCircle className="w-5 h-5" />,
      colorClass: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconColor: 'text-emerald-500',
    },
    {
      title: 'Client Reported',
      desc: 'Information provided directly by the client',
      icon: <UserCheck className="w-5 h-5" />,
      colorClass: 'bg-blue-50 text-blue-700 border-blue-200',
      iconColor: 'text-blue-500',
    },
    {
      title: 'AI Inference',
      desc: 'Derived by AI from conversation context',
      icon: <BrainCircuit className="w-5 h-5" />,
      colorClass: 'bg-amber-50 text-amber-700 border-amber-200',
      iconColor: 'text-amber-500',
    },
    {
      title: 'Missing Information',
      desc: 'Data gaps identified for follow-up',
      icon: <Search className="w-5 h-5" />,
      colorClass: 'bg-rose-50 text-rose-700 border-rose-200',
      iconColor: 'text-rose-500',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg shadow-sm">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">FUME AI</h1>
              <p className="text-xs font-medium text-slate-500 tracking-wide">Client Intelligence</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="text-slate-500 hover:text-slate-900">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <Button variant="default" size="sm" className="bg-slate-900 hover:bg-slate-800 text-white shadow-sm">
              New Session
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Hero / Input Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold text-slate-900 mb-3 tracking-tight">
              Analyze Client Conversations
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Paste the full conversation transcript below to generate structured, actionable client intelligence.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 transition-shadow hover:shadow-md">
            <label htmlFor="transcript" className="block text-sm font-semibold text-slate-700 mb-2">
              Conversation Transcript
            </label>
            <Textarea
              id="transcript"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste the full conversation transcript between client and coach here..."
              className="min-h-[200px] resize-y text-base p-4 rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 bg-slate-50 focus:bg-white transition-colors"
            />
            
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleAnalyze}
                disabled={!inputText.trim() || isAnalyzing}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl text-base font-medium shadow-sm transition-all hover:shadow-md disabled:opacity-70 disabled:hover:shadow-sm"
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                    Analyzing Conversation...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-3" />
                    Analyze Conversation
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Dashboard Results Section */}
        <AnimatePresence>
          {hasAnalyzed && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-16"
            >
              {/* Classification Badges */}
              <section>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900 flex items-center gap-2">
                    Information Classification
                  </h3>
                  <div className="h-px flex-1 bg-slate-200 ml-6"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {classifications.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                      className={`p-4 rounded-xl border flex flex-col gap-2 ${item.colorClass}`}
                    >
                      <div className="flex items-center gap-2 font-semibold">
                        <span className={item.iconColor}>{item.icon}</span>
                        {item.title}
                      </div>
                      <p className="text-sm opacity-90 leading-snug">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Cards Grid */}
              <section>
                <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">
                    Client Intelligence Dashboard
                  </h3>
                  <div className="h-px flex-1 bg-slate-200 ml-6"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cardsData.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.05 }}
                      className={`bg-white rounded-xl shadow-sm border border-slate-200 p-6 relative overflow-hidden transition-all hover:shadow-md group`}
                    >
                      {/* Left border accent */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 ${card.accent}`}></div>
                      
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${card.iconBg} ${card.iconColor} shrink-0 group-hover:scale-110 transition-transform`}>
                          {card.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">{card.title}</h4>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            {card.content}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Human Review Actions */}
              <section className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 text-center max-w-4xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-slate-900 mb-2">Human Review</h3>
                  <p className="text-slate-500">
                    Review the AI-generated analysis before finalizing the client report.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                  <Button size="lg" className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl h-14 px-8 text-base shadow-sm">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Approve Analysis
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-blue-200 text-blue-700 hover:bg-blue-50 rounded-xl h-14 px-8 text-base">
                    <Edit className="w-5 h-5 mr-2" />
                    Edit Details
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-rose-200 text-rose-700 hover:bg-rose-50 rounded-xl h-14 px-8 text-base">
                    <XCircle className="w-5 h-5 mr-2" />
                    Reject
                  </Button>
                </div>
                
                <p className="text-xs text-slate-400 font-medium flex items-center justify-center gap-2">
                  <EyeOff className="w-4 h-4" />
                  All AI-generated insights require human review before being added to official client records.
                </p>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8 text-center border-t border-slate-200 bg-white">
        <p className="text-sm text-slate-500 font-medium">
          © {new Date().getFullYear()} FUME AI · Built for Health Coaches · Powered by AI
        </p>
      </footer>
    </div>
  );
};

export default FumeAIClientIntelligence;
