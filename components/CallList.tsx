"use client";
import { CallRecording } from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CallList = ({ type }: { type: "ended" | "upcoming" | "recordings" }) => {
  const router = useRouter();
  // const{endedCalls,upcomingCalls,callRecordings,isLoading} = useGetCalls()
  const [recordings, setRecordings] = useState<CallRecording[]>([]);
  const getCalls = () => {
    switch (type) {
      case "ended":
      // return endedCalls
      case "upcoming":
      // return upcomingCalls
      case "recordings":
      // return callRecordings
      default:
        return [];
    }
  };
  const getNoCallsMessage = () => {
    switch (type) {
      case "ended":
      // return 'No Previous Calls'
      case "upcoming":
      // return 'No Upcoming Calls'
      case "recordings":
      // return 'No Recordings'
      default:
        return "";
    }
  };
  useEffect(() => {
    const fetchRecordings = async () => {
      // const callData = await Promise.all(callRecordings?.map((meeting)=>meeting.queryRecordings()) ?? []
    };
  });
  return <div></div>;
};

export default CallList;
