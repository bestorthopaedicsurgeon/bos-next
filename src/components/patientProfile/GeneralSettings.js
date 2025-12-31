"use client";
import React from "react";
import { Switch } from "@/components/ui/switch";
import { Lock, Bell, ChevronRight } from "lucide-react";

const GeneralSettings = () => {
  return (
    <div className="w-full bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
      <div className="bg-gray-50/50 border-b border-gray-100 px-8 py-5">
        <h2 className="text-lg font-bold text-[#232323] font-syne">General Settings</h2>
      </div>
      
      <div className="p-8 space-y-10">
        {/* Change Password Section */}
        <div className="flex items-start justify-between group">
          <div className="flex gap-4">
            <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 group-hover:bg-[#2F797B]/10 group-hover:text-[#2F797B] transition-all">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#232323] mb-1">Update Password</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">Keep your account secure by using a strong password.</p>
            </div>
          </div>
          <button className="flex items-center gap-1.5 px-5 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-white hover:border-[#2F797B] hover:text-[#2F797B] transition-all group/btn shadow-sm active:scale-95">
            Change
            <ChevronRight className="h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
          </button>
        </div>
        
        {/* Notifications Section */}
        {/* <div className="flex items-start justify-between group">
          <div className="flex gap-4">
            <div className="mt-1 h-10 w-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-400 group-hover:bg-[#2F797B]/10 group-hover:text-[#2F797B] transition-all">
              <Bell className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#232323] mb-1">Email Notifications</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">Receive updates about your appointments and questions.</p>
            </div>
          </div>
          <div className="flex items-center pt-1">
            <Switch defaultChecked className="data-[state=checked]:bg-[#2F797B] data-[state=unchecked]:bg-gray-200" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default GeneralSettings;
