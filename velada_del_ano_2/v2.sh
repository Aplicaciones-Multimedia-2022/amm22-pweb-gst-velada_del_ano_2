#!/bin/sh

gst-launch-1.0 videotestsrc ! videoconvert ! videoscale ! video/x-raw,width=320,height=240 ! clockoverlay shaded-background=true font-desc="Sans 38" ! theoraenc ! oggmux ! tcpserversink host=127.0.0.1 port=9090
