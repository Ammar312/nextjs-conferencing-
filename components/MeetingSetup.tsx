"use client";
import {
  DeviceSettings,
  useCall,
  useCallStateHooks,
  VideoPreview,
} from "@stream-io/video-react-sdk";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

const MeetingSetup = ({
  setIsSetupComplete,
}: {
  setIsSetupComplete: (value: boolean) => void;
}) => {
  //   const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();
  //   const callStartAt = useCallStartsAt();
  //   const callEndedAt = useCallEndedAt();
  const call = useCall();

  if (!call) {
    throw new Error("useStreamCall must be used within a StreamCall component");
  }
  const [isMicCamToggled, setIsMicCamToggled] = useState(false);
  useEffect(() => {
    if (isMicCamToggled) {
      call.camera.disable();
      call.microphone.disable();
    } else {
      call.camera.enable();
      call.microphone.enable();
    }
  }, [isMicCamToggled, call?.camera, call?.microphone]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-3 text-white">
      <h1 className="text-center text-2xl font-bold">Setup</h1>
      <VideoPreview />
      <div className="h-16 flex justify-center items-center gap-3 ">
        <label className="flex justify-center items-center gap-2 font-medium">
          {" "}
          <input
            type="checkbox"
            checked={isMicCamToggled}
            onChange={(e) => e.target.checked}
          />
          Join with Mic and Camera Off
        </label>
        <DeviceSettings />
      </div>
      <Button
        className="rounded-md bg-green-500 px-4 py-2.5 "
        onClick={() => {
          call.join();
          setIsSetupComplete(true);
        }}
      >
        Join Meeting
      </Button>
    </div>
  );
};

export default MeetingSetup;
