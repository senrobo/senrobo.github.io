---
title: "Shrinking Layer 3"
description: "Increasing the mirror FOV"
pubDate: "Nov 21 2023"
heroImage: "/blog-placeholder-4.jpg"
author: "Sim Shuan Luck"
---

## Introduction

Previously, layer 3 had the same diameter as the other two layers, which meant that when the ball was close to the bot (around 4cm), layer 3 will block the light reflected by the ball from reaching the mirror. This is a big problem because the camera should be able to see the ball at close distances, to move around the ball when capturing it, and also for the bot to play an active role when sumo wrestling for the ball. Another problem was that the TOF holder was blocking the ball at close distances.

## Edit 1

To overcome this problem, we shrunk the diameter of layer 3 to 145mm, and since the standoffs at the sides can no longer be used to mount layer 3, we shifted to using six of the motor mounting holes. Since four of the motor mounting holes are already being used to secure the battery holder, we had to hollow out the mounting legs of the battery holder so that it can slide over the standoffs that we will be placing there.

![Alt text](/battery-holder.webp)

Regarding the TOF holders, we could not occupy the space in the middle of the bot, so that it will not reduce the FOV of the mirror. Hence, the four TOF holders were split into two groups, with one group on each side. We adopted a right isoceles triagular TOF holder shape on each side, to be as minimalistic as possible, since each side had one TOF facing front/back and one TOF facing left/right.

![Alt text](/offsetted-tof.webp)

## Problems with Edit 1

When we first tested the new arrangement, we were plesantly surprised that we were able to see the ball very clearly. But we soon realised how stupid we were - it was because acrylic is transparent. Hence, we used our finger to block the edge of layer 3, and realsied that the camera could only see a few pixels of the ball when it is touching the bot.

![Alt text](/l3-145-unblocked.webp)

![Alt text](/l3-145-blocked.webp)

## Edit 2

We then shrunk down layer 3 further to 130cm. To accomodate this, we had to turn the switch 90 degress so that it will not go too close to any mounting hole. Further updates will come soon...
