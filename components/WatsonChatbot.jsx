import React, { useEffect } from "react";
import { View } from "react-native";


export const WatsonChatbot = () => {
  useEffect(() => {

      var styles = `
        .WACLauncher__ButtonContainer {
          display: none !important;
        }

        body.show-watson .WACLauncher__ButtonContainer {
          display: block !important;
        }

        .WAC__homeScreenOriginal-starter-text { 
            color: black !important
        }
        .WAC__homeScreenOriginal-starter-icon {
          fill: #D64204 !important
        }

      `
    var styleSheet = document.createElement("style")
    styleSheet.innerText = styles
    document.head.appendChild(styleSheet)


    console.log("Watson loaded");
    window.watsonAssistantChatOptions = {
      integrationID: "fc29a42b-8166-4aea-9b1e-1a2ad1c11249", // The ID of this integration.
      region: "eu-gb", // The region your integration is hosted in.
      serviceInstanceID: "9be93b09-ef48-48d6-a34b-5c25e6ac4aaa", // The ID of your service instance.
      onLoad: function (instance) {
        instance.render();
      },
    };

    setTimeout(function () {
      const t = document.createElement("script");
      t.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });
  }, []);

  return null;
};
