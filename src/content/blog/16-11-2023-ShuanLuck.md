---
title: "Mech Changes"
description: "PCB Support & Mirror Stabalisation"
pubDate: "Nov 16 2023"
heroImage: "/mirrorbrace.webp"
---

## PCB Offset and Cover Extension

The PCB is easily damaged when hit from the side, which poses a risk of exposing the copper after continuous impacts. To address this issue, the DXF file for all three layers is offset inwards by 1mm, and the cover is extended downwards and/or upwards to fill the gap. This ensures that there is a layer of hard plastic protecting the edges of the PCB.

## Standoff Stabilisation

![Alt text](public/mirrorbrace.webp?raw=true "Title")

The 90mm standoffs (currently 110mm) tend to be wobbly when shaken, even when the bot is held still. To address this, I have added extensions/arms on both sides of the TOF holder with cross bracing. These extensions wrap around the side standoffs and prevent them from slanting too much to either side.
