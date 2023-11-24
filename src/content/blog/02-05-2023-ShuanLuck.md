---
title: "Drive System"
description: "Choice of main motors and considerations"
pubDate: "May 02 2023"
heroImage: "/blog-placeholder-7.png"
author: "Sim Shuan Luck"
---

## Introduction

The drive system is one of the most important, if not the most important part of the bot. Without the main motors, the bot cannot move at all. I will detail the considerations that we made when choosing our main motors, and the placement of it.

## Motor Options

We had a few motor brands and models to choose from. Here are the more prominent ones:

1 - Chihai CHR-GM25-370ABHL

This is a classic motor that is reliable. The 12v version with a 1:20 gear ratio has a no-load speed of 600rpm, rated torque of 35 kg.cm, stall torque of 7.0 kg.cm, and a total length of only 50mm. 

2 - Joinmax JMP-BE-3561

Joinmax is very commonly used amongst RCJ teams. It has a no-load speed of 1700rpm, and a stall torque of 20 kg.cm. However, Sentinels has had problems with this motor when coempeting in the lightweight section in the 2023 RCJ season, with the motor only operating within a narrow current range. 

3 - [Pololu 4:1 Metal Gearmotor 25Dx50L mm HP 12V](https://www.pololu.com/product/3203)

This pololu motor was the only one that was even close to the performance of the chihai. It had a slightly higher stall torque of 7.4 kg.cm, but the no-load speed was significantly lower at 500rpm. 

4 - Maxon Motors

RCJ teams with higher funding usually use maxon motors, because it has a high performance and some models are very thin, which saves a lot of space (especially with the decreased 18cm size limit), allowing for more space for other systems, such as kicker and dribbler. Unfortunately, due to the lack of funding, we are unable to obtain these expensive, Swiss-made motors. Pls sponsor thx 🙏

## Choice of Motor

In the end, we choose the chihai, because it specs are pretty average while meeting our needs, and is reliable. We chose the version without the encoders due to the lack of space. 

![Alt text](/chihai-motor.webp)

## Motor Arrangement

We arranged the 4 motors in a split cross fashion, to allow for more space for the kicker and dribbler. However, due to the motor length, we had to resort to an angle of 56 degrees, which is not ideal, but it is still able to support the robot well. 

![Alt text](/layer1-outline.webp)
*Layer 1 outline*

## Accomodations Made

In order to accomodate the length of the chihai motor, we had to switch our solenoid from KK-1040B to KK-1039B, which had a lower maximum force. However, we will be making up for this by using more capacitors, to ensure that our kicking power is near the limits set down in the rules:

> Place robot inside the left corner of a goal. Perform a kick into the opposing goal. The Open League kicker power test is passed if after bouncing off of the opposite goal the ball does not return further than the front line of to the penalty area it was shot from.

![Alt text](/kk-1040b.webp)
*KK-1040B*

![Alt text](/kk-1039b.webp)
*KK-1039B*