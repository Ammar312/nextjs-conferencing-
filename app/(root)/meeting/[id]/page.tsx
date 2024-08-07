"use client";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const page = ({ params }: { params: { id: string } }) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { id } = useParams();
  const { user, isLoaded } = useUser();
  // const{call,isCallLoading} = useGetCallById(id)

  return (
    <main className="h-screen w-full">
      <StreamCall>
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default page;
