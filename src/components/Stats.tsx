/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { CheckCircle, ShieldCheck, Heart, Users } from "lucide-react";

interface StatItemProps {
  icon: React.ComponentType<any>;
  label: string;
  targetNumber: number;
  suffix: string;
  key?: React.Key;
}

function StatCard({ icon: Icon, label, targetNumber, suffix }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = 0;
    const duration = 2000; // 2 seconds

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Quadratic ease-out count animation
      const easedProgress = 1 - Math.pow(1 - percentage, 2);
      setCount(Math.floor(easedProgress * targetNumber));

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(targetNumber);
      }
    };

    requestAnimationFrame(animateCount);
  }, [targetNumber]);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/40 backdrop-blur-sm border border-brand/5 rounded-2xl shadow-sm hover:shadow-md transition-all">
      <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-4xl md:text-5xl font-serif font-bold text-dark mb-2 tracking-tight">
        {count}
        {suffix}
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 font-mono text-center">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const statsList = [
    {
      icon: CheckCircle,
      label: "Projects Finished",
      targetNumber: 500,
      suffix: "+"
    },
    {
      icon: Users,
      label: "Happy Families",
      targetNumber: 450,
      suffix: "+"
    },
    {
      icon: ShieldCheck,
      label: "Years Experience",
      targetNumber: 10,
      suffix: "+"
    },
    {
      icon: Heart,
      label: "Sq. Ft. Designed",
      targetNumber: 1.2,
      suffix: "M+"
    }
  ];

  return (
    <section id="stats" className="py-20 bg-brand-light/30 border-b border-brand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {statsList.map((stat, idx) => (
            <StatCard
              key={idx}
              icon={stat.icon}
              label={stat.label}
              targetNumber={stat.targetNumber === 1.2 ? 120 : stat.targetNumber} // map 1.2M to 120 for counting, display custom suffix
              suffix={stat.targetNumber === 1.2 ? "M+" : stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
