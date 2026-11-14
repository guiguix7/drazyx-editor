name: viral-shortform-music-and-aesthetic-editing
description: Programmatic video editing, motion graphics, shader, and pacing specification for 13 viral short-form music visualizer, DAW beat-cookup, UI kinetic lyric, and aesthetic montage styles.
version: 1.0.0
tags: [video-editing, motion-graphics, remotion, ffmpeg, shaders, phonk, visualizer, tiktok, reels]

Viral Short-Form Music & Aesthetic Video Editing (SKILL.md)

1. Purpose & Core Philosophy

This skill equips an AI video-editing agent (e.g., Remotion, FFmpeg, After Effects scripting, or WebGL/GLSL compositors) to transform static audio tracks, Digital Audio Workstation (DAW) screen recordings, UI templates, or raw POV footage into high-retention vertical and retro-framed short-form videos.

Universal Viral Mechanics (Apply Across All Styles)

Audio-Visual Synesthesia: Every major sonic event (low-pass filter sweep, snare fill, 808 sub-bass transient, vocal chop) must trigger a proportional visual state change (exposure jump, directional motion blur, scale punch, chromatic split, or hard cut).

The 0–3s Retention Hook: Never open on a static, unedited frame. Use either an immediate pattern interrupt (vocal acapella + "VOLUME UP" prompt, 3D particle burst) or a 1.5–2.5s dark/blurred rack-focus buildup that signals an imminent drop.

Controlled Contrast (Clarity vs. Chaos): Alternate between razor-sharp, readable frames (so viewers can inspect DAW track names, waveforms, or song titles) and brief, high-impact kinetic bursts (150–350ms RSMB blurs, negative flashes, or 3D card whips) to prevent visual fatigue.

Zero-Friction Attribution: When promoting a track, integrate native-feeling UI metadata (Spotify/iOS player cards, cover art, track/artist names) to convert passive viewers into saves, bookmarks, and external streams.

Tight Loop Architecture: End active content cleanly on a musical bar line (10.8s–30.0s) via an abrupt cut-to-black or rapid blur-fade so the platform auto-loop feels seamless.

2. Reusable Visual & DSP Effect Primitives

When implementing any of the 13 archetypes below, compose from these standardized primitives:

PRIMITIVE_RSMB_BLUR: Directional velocity motion blur (angle: 0° horizontal or 90° vertical, shutter_angle: 180°–360°, duration: 120–250ms) paired with a 1.04x–1.12x ease-out scale punch and damped sinusoidal micro-shake on transient peaks.

PRIMITIVE_HALATION_BLOOM: Extract highlights above luminance threshold 0.75, apply multi-pass Gaussian blur (radius: 24px–64px), tint to theme hue (neon violet, cyan, magenta, or amber), and composite via screen / add blend mode.

PRIMITIVE_RACK_FOCUS_BOKEH: Animate Gaussian/lens blur from 45px → 0px over 1.8s–4.5s while zooming out (1.35x → 1.00x). Circular UI LEDs or streetlamps expand into glowing bokeh rings during high-blur frames.

PRIMITIVE_BARREL_RGB_SPLIT: Apply wide-angle barrel distortion (k1 = -0.18 to -0.25) combined with horizontal RGB channel offset (R: -6px, G: 0px, B: +6px) activated exclusively during heavy bass drops.

PRIMITIVE_SCREEN_TEAR_GLITCH: Split frame horizontally at 2–3 randomized Y-coordinates for 2–4 frames (33–66ms) on snare transients, offsetting slices horizontally by ±25px–60px.

PRIMITIVE_25D_FLOATING_CARD: Map a 2D source layer onto a 3D plane (perspective: 1000px, rotateX/Y/Z: ±8°–18°) floating above a darkened, blurred duplicate or particle background, with smooth spring-eased transitions back to 0° full-screen on the downbeat.

PRIMITIVE_FLASHBANG_ECHO: On the drop downbeat, spike exposure +2.5 EV (white/blue screen flash decaying over 300ms) while spawning 3–5 translucent, vertically cascading scale-echo rectangles (opacity: 0.4 → 0.0).

PRIMITIVE_PUPPET_IDLE_SWAY: Apply low-frequency sinusoidal mesh/wave deformation (freq: 0.4Hz, amplitude: 6–12px, anchored at bottom edge) to 2D character cutouts so hair and clothing sway organically.

PRIMITIVE_ANAMORPHIC_STREAK: Detect point light sources (luminance > 0.90) and convolve with a high-aspect-ratio horizontal or vertical streak kernel (1:40 ratio) for cinematic lens flare.

3. Master Catalog of the 13 Editing Styles

Style 01: Violet Bloom FL Studio Beat Cookup (9:16 Vertical)

Visual Signature: Tightly cropped FL Studio Playlist (Tracks 1–18) graded in deep violet and neon purple with intense white-cyan halation on active bass/vocal waveforms.

Timeline Choreography:

0:00.0–0:02.6: Fade from black using PRIMITIVE_RACK_FOCUS_BOKEH (blur: 40px → 0px, zoom: 1.25x → 1.0x) during filtered intro.

0:02.8–0:04.8: Pre-drop pattern interrupt—pull timeline into PRIMITIVE_25D_FLOATING_CARD with black border and heavy directional blur, snapping back to full-screen on the drop.

0:04.8–0:14.8: Fire PRIMITIVE_RSMB_BLUR + horizontal camera bounce on every kick, snare, and distorted 808 hit.

0:14.8–0:15.2: Rapid directional blur-to-black outro on bar end.

Style 02: Widescreen Frosted-Glass Minimalist Visualizer (16:9 Landscape)

Visual Signature: Centered frosted-glass dark mobile player UI card (cover art, track title, artist, live countdown scrubber, centered white line-spectrum waveform with stylized watermark) floating over a deep-space drifting snow/dust particle field.

Timeline Choreography:

0:00.0–0:02.0: Quick 0.5s fade-in onto static UI card over an isolated, unfiltered vocal acapella hook.

0:02.0–0:20.5: On every low-end kick/bass transient, apply PRIMITIVE_RSMB_BLUR (zoom/directional pulse) and subtle scale punch across both UI card and particle backdrop while the line spectrum reacts in real time.

0:20.5: Hard cut at end of musical loop.

Style 03: 90°-Rotated Vertical DAW Cascade & Screen-Tear Cookup (9:16 Vertical)

Visual Signature: FL Studio Playlist rotated 90° clockwise to fill 9:16 edge-to-edge. Track headers sit along the top; fixed horizontal amber playhead sits in upper third while pattern blocks scroll upward like a rhythm game. Dark charcoal/slate-blue/crimson palette with neon-pink LED halation.

Timeline Choreography:

0:00.0–0:02.5: Gradual brightness fade-in from black over sparse vocal stutter.

0:02.5–0:10.5 (Drop 1): Scale punch + diagonal PRIMITIVE_RSMB_BLUR with red-cyan streaks; trigger PRIMITIVE_SCREEN_TEAR_GLITCH on snare hits.

0:10.5–0:13.0 & 0:20.5–0:23.5 (Breakdowns): Strip arrangement to 1–2 isolated white tracks with calm camera, then launch subsequent drops via fast horizontal/diagonal whip-blurs.

0:29.5: Rapid fade-to-black outro.

Style 04: Low-Exposure iOS Lock-Screen "Flashbang" Promo (9:16 Vertical)

Visual Signature: Realistic frosted-glass iOS Lock-Screen media widget (album art, title, artist, AirPlay glyph, live scrubber, animated waveform icon) over a color-matched blurred backdrop.

Timeline Choreography:

0:00.0–0:04.5: Hold screen under heavy low-exposure dimming (-2.0 EV) synced to a low-pass filtered audio buildup. Overlay glowing serif release text ("[TITLE] || Out Now") at bottom of cover art.

0:04.3–0:04.5: Split-second dip to pure black on final pre-drop snare.

0:04.6–0:05.3: Detonate PRIMITIVE_FLASHBANG_ECHO, remove "Out Now" overlay, and reveal full-brightness high-saturation artwork accented with PRIMITIVE_ANAMORPHIC_STREAK starburst flares.

0:05.3–0:13.3: Lock UI crisp and stationary (zero camera shake) to let high-contrast colors and ticking scrubber breathe; fade to black at 0:13.3.

Style 05: Letterboxed 16:9 Barrel-Warp & RGB-Split DAW Cookup (16:9 inside 9:16)

Visual Signature: Widescreen 16:9 crop of FL Studio Tracks 1–8 framed by thick top/bottom black bars. Deep purple grading with intense violet-white bloom.

Timeline Choreography:

0:00.0–0:02.5: PRIMITIVE_RACK_FOCUS_BOKEH outward zoom during synth intro.

0:02.5–0:05.5: Lock frame flat and razor-sharp during melodic buildup and isolated vocal chop.

0:05.5–0:07.3 (Stage 1 Drum Drop): Fire crisp horizontal PRIMITIVE_RSMB_BLUR punches on snare hits while keeping grid flat.

0:07.3–0:18.0 (Stage 2 Full Drop): Trigger white-pink halation flash and activate PRIMITIVE_BARREL_RGB_SPLIT + continuous beat-synced horizontal motion blur while visible pink pitch automation curves glide across the timeline.

Style 06: Gunmetal Slate High-Clarity DAW & 2.5D Whip Cookup (9:16 Vertical)

Visual Signature: Cool, desaturated gunmetal-slate and charcoal FL Studio Playlist accented by a glowing vertical orange playhead and crisp white-cyan bloom.

Timeline Choreography:

0:00.0–0:01.8: Dark bloom rack-focus pull into sharp focus.

0:01.8–0:03.5: Razor-sharp static lock during vocal hook.

0:03.5–0:05.8: Pre-drop vertical blur punch into PRIMITIVE_25D_FLOATING_CARD (0:04.0–0:05.0), whipping back into full-screen on the drop.

0:05.8–0:18.0: Alternate between crystal-clear timeline playback (so viewers can read alternating vocal-chop MIDI blocks) and targeted 4-bar horizontal whip-blurs + mid-drop -1.5 EV exposure dip (0:12.5) before a secondary pattern layer enters.

0:18.0–0:20.6: Mute upper stems for a stripped-back cooldown and blur-fade to black.

Style 07: Meta Over-the-Shoulder 2.5D UI & Kinetic Lyric Showcase (9:16 Vertical)

Visual Signature: Hand-held smartphone framing of a physical desktop monitor playing a single-track NLE timeline (e.g., DaVinci Resolve) with a native top caption banner ("[Creator/AI] cooking 🧑‍🍳"), showcasing dense 2.5D UI morphs inside the monitor viewer.

Timeline Choreography (1.5s Micro-Pacing):

0:00.0–0:02.4: 3D perspective light-up floor grid pulsing magenta on drum hits → morphs into neon-green Spotify soundwave circle.

0:02.5–0:05.9: 3D card flip into iOS media widget (play icon animates to pause) → 3D tilt into horizontal Spotify player bar → bright white flash transition.

0:06.0–0:08.3: 3D-angled purple Spotify Lyrics card with word-by-word ease-out scaling typography.

0:08.4–0:10.3: High-contrast B&W dance footage with bold sans-serif kinetic text masked behind the dancer's silhouette + neon-pink glowing cursive accent word.

0:10.4–0:11.9: Glossy pink iMessage speech bubble with animated typing dots (...) morphing into lyric phrase.

0:12.0–0:17.0: Album art beat-pulse → 3D flip back to dark iOS media widget with smooth push-in zoom outro.

Style 08: 4:3 Puppet-Warp Anime & JDM Vinyl Visualizer (4:3 Retro Frame)

Visual Signature: Multi-layer 2D composite over a moody, low-key underground parking garage photograph with modified JDM/sports cars.

Timeline Choreography:

Layers: Background garage photo + subtle ambient floor shimmer; Foreground-Left 2D anime character cutout; Foreground-Right white-outlined chibi sticker; Top-Right translucent navy iOS player card (cover art, title, credit, live vertical-bar waveform) with a glossy black vinyl record peeking behind its right edge and rotating continuously (15 RPM).

0:00.0–0:02.0: Smooth fade-in from black synced to rising whoosh SFX.

0:02.0–0:20.0: Run PRIMITIVE_PUPPET_IDLE_SWAY continuously on main character while chibi sticker bounces to beat; drop low end for a 1.5s pitched vocal break (0:07.8–0:09.5) before bass enters.

0:20.0–0:21.0: Smooth 1-second fade to black.

Style 09: 3D Tilt-Shift Spotify EP-to-Water-Reflection Particle Visualizer (9:16 Vertical)

Visual Signature: Two-act promo transitioning from a 3D streaming UI showcase into a dark, mirror-reflected cyberpunk water stage.

Timeline Choreography:

0:00.0–0:04.0: Diagonal 3D camera pan and zoom-out across Spotify desktop EP view with heavy tilt-shift depth-of-field blur, floating metallic chrome + neon-purple brush typography, and Spotify "Like" heart animating from outline to solid green.

0:04.0–0:06.0: Cut to dark stage with rippling water floor; swirling neon-magenta, violet, and cyan smoke particles rise and coalesce into square cover art during pre-drop vocal roll.

0:06.0–0:18.3 (Drop): Lock cover art center-screen with real-time water reflection below. Flank left/right edges with glowing cyan horizontal audio spectrum bars; pop hollow glowing neon squares (cyan → purple) sequentially along the top edge in sync with each arpeggio note; fire vertical PRIMITIVE_RSMB_BLUR punches every 2–4 bars.

Style 10: 3D Fire-Ring Palm-Tree Card & Amber-Gold DAW Cookup (9:16 Vertical)

Visual Signature: Alternates between a 3D floating DAW card surrounded by fire/neon foliage and a full-screen burnt-amber/sepia-gold FL Studio Playlist (Tracks 1–13) with red-orange playhead.

Timeline Choreography:

0:00.0–0:00.5: Pure black hold on initial vocal hook; erupt via fireball burst (0:00.5) into PRIMITIVE_25D_FLOATING_CARD ringed by animated flames over glowing neon palm trees and bokeh orbs (0:00.5–0:02.3).

0:02.3–0:07.8 (Drop 1): Zoom into full-screen burnt-amber timeline; punctuate transients with horizontal PRIMITIVE_RSMB_BLUR and trigger a 2-frame stark B&W negative/threshold flash at 0:06.0.

0:07.8–0:12.3 (Breakdown): Dip to black → re-enter with liquid wave-warp on floating fire-ring card over falling neon-green light streaks → whip diagonally as a purple-tinted 2.5D split-card clone separates (0:10.5) → spin miniature 3D card (0:12.0) back into full-screen Drop 2 (0:12.3–0:15.3).

Style 11: "VOLUME UP" Magenta-Bokeh Rack-Focus DAW Cookup (9:16 Vertical)

Visual Signature: Midnight-indigo and obsidian FL Studio Playlist (Tracks 1–12) with white vertical playhead and vibrant neon-magenta track LEDs.

Timeline Choreography:

0:00.0–0:01.8: Fade from black onto heavily blurred timeline; display centered bold white "VOLUME UP" text with intense horizontal white light-streak glow (PRIMITIVE_ANAMORPHIC_STREAK) during clean melodic vocal intro.

0:01.8–0:04.8: Remove text and execute slow outward zoom + PRIMITIVE_RACK_FOCUS_BOKEH, turning pink track LEDs into large glowing magenta bokeh rings before locking sharp at 0:04.8.

0:04.8–0:08.5: Hold camera completely stationary so viewers watch the white tension-riser automation curve climb into the drop.

0:08.5–0:23.5: Keep waveform playback crisp and readable within phrases; fire horizontal PRIMITIVE_RSMB_BLUR punches strictly on 4-bar phrase boundaries (0:09.0, 0:16.0, 0:21.5).

Style 12: Royal-Purple High-Contrast Waveform & Transient-Flash Cookup (9:16 Vertical)

Visual Signature: Royal-purple and obsidian FL Studio Playlist accented by a glowing lime-yellow playhead and white-violet halation.

Timeline Choreography:

0:00.0–0:02.3: Black fade-in with PRIMITIVE_RACK_FOCUS_BOKEH outward zoom.

0:02.3–0:05.0: Crisp static pre-drop lockdown showing reverse-FX sweep entering the downbeat.

0:05.0–0:09.6 (Drop 1): Contrast razor-sharp playback of choppy vocal waveforms between beats against sudden vertical/horizontal PRIMITIVE_RSMB_BLUR streaks and white-purple bloom flashes on major transients (0:05.0, 0:06.6, 0:08.3).

0:09.6–0:12.0: 2-bar mid-drop breakdown on crisp grid → horizontal/vertical whip-blur into Drop 2 (0:12.0–0:15.3) → hard cut to black.

Style 13: 4:3 Desaturated "Doomer / Night Walk" Hard-Cut POV Montage (4:3 Retro Frame)

Visual Signature: First-person handheld nocturnal walking clips framed in 4:3 with zero shakes, flashes, or transitions—relying purely on beat-synced hard cuts, cold desaturated slate-grey/charcoal grading, selective muted color pops (crimson/pink/lavender flowers against concrete/snow), PRIMITIVE_ANAMORPHIC_STREAK on streetlamps, and a single tiny centered ♫ glyph.

Timeline Choreography:

0:00.0–0:08.0 (Phase 1): Execute clean hard cuts every 0.65s–1.0s on the rhythmic pulse, alternating bleak urban shots (railway tracks, dark apartment blocks, snowy woods, empty streets) with intimate POV shots of a hand holding roses or wildflowers.

0:08.0–0:10.8 (Phase 2 Climax): Double cutting speed to rapid-fire 0.30s–0.40s hard cuts as the synth melody peaks.

0:10.8: Abrupt hard cut to pure black right on the final note.

4. AI Agent Execution Pipeline

When given an audio file and visual assets (DAW capture, cover art, UI metadata, or raw video clips), execute the following steps:

DSP Audio Analysis:

Detect BPM, downbeat timestamps, and bar boundaries (4-bar / 8-bar markers).

Segment audio into structural zones: INTRO_FILTERED, PRE_DROP_VACUUM, DROP_PRIMARY, MID_BREAKDOWN, DROP_SECONDARY, OUTRO.

Extract transient peaks (kick, snare, 808_sub) and RMS amplitude envelope for reactive waveforms.

Archetype Selection:

DAW Screen Recording provided: Select from Styles 01, 03, 05, 06, 10, 11, or 12 based on desired color palette (violet, slate, amber, or royal purple) and intensity level.

Single Cover Art + Audio provided: Select Style 02 (minimalist widescreen), Style 04 (iOS lock-screen flashbang promo), Style 08 (anime/car composite), or Style 09 (3D Spotify-to-water particle visualizer).

Lyric / Brand Motion-Graphics Promo: Select Style 07 (over-the-shoulder NLE meta-framing + 1.5s UI morphs).

Raw Handheld B-Roll / POV Clips: Select Style 13 (4:3 desaturated hard-cut montage with accelerating finale).

Keyframe & Shader Binding:

Map PRE_DROP_VACUUM (150ms–400ms before DROP_PRIMARY) to an exposure dip (-2.0 EV), 2.5D card pullback, or frequency cutoff.

Bind DROP_PRIMARY downbeat to the archetype's signature impact (PRIMITIVE_FLASHBANG_ECHO, PRIMITIVE_BARREL_RGB_SPLIT, or PRIMITIVE_RSMB_BLUR).

Enforce readability windows between transient bursts so text, track names, and waveforms remain legible.

Loop & Export Verification:

Trim active content to an exact bar boundary (10s–30s) and apply a clean 0ms–300ms cut or blur-to-black exit before any platform watermark card.