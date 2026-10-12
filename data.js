/* Margo Program — glute-priority training plan (13 Oct 2026). Research + rationale: /workspace/health/margo/program.md
   Still images: free-exercise-db (github.com/yuhonas/free-exercise-db), public domain (Unlicense).
   match: 'exact' = same movement; 'closest' = nearest real image available; null = no image. */

const MOV = {
  // activation (bands, bodyweight)
  'Banded glute bridge': { img: 'Barbell_Glute_Bridge', match: 'closest', src: 'Glute Bridge (band above knees, no bar)', cue: 'Band above the knees, push knees out. Drive through the heels, tuck the ribs, squeeze 2 s at the top.', lower: true, bw: true },
  'Frog pump': { img: 'Butt_Lift_Bridge', match: 'closest', src: 'Butt Lift Bridge (soles together, knees out)', cue: 'Soles of the feet together, knees out. Short fast pulses, squeeze hard at the top.', lower: true, bw: true },
  'Banded lateral walk': { img: null, match: null, src: '', cue: 'Band around the knees or ankles, soft knees, hips back. Small steps sideways, toes forward, no swaying.', lower: true, bw: true },
  'Banded clamshell': { img: null, match: null, src: '', cue: 'Lie on your side, knees bent, band above the knees. Open the top knee without rolling the hips back. Pause.', lower: true, bw: true },
  // main
  'Barbell hip thrust': { img: 'Barbell_Hip_Thrust', match: 'exact', src: 'Barbell Hip Thrust', cue: 'Upper back on the bench edge, bar on a pad. Chin tucked, ribs down. Drive through the heels to a flat tabletop and squeeze 1–2 s.', lower: true },
  'Smith machine hip thrust': { img: 'Smith_Machine_Hip_Raise', match: 'closest', src: 'Smith machine hip raise', cue: 'Same as the barbell version: chin tucked, shins vertical at the top, squeeze 1–2 s.', lower: true },
  'Romanian deadlift': { img: 'Romanian_Deadlift', match: 'exact', src: 'Romanian Deadlift', cue: 'Soft knees, push the hips back, bar slides down the thighs. Stop when the hamstrings are tight, then squeeze the glutes to stand.', lower: true },
  'DB Romanian deadlift': { img: 'Stiff-Legged_Dumbbell_Deadlift', match: 'closest', src: 'Stiff-Legged Dumbbell Deadlift (soft knees)', cue: 'DBs close to the legs, hips back, flat back. Feel the stretch, squeeze up.', lower: true },
  'Smith machine squat': { img: 'Smith_Machine_Squat', match: 'exact', src: 'Smith Machine Squat', cue: 'Feet slightly forward and shoulder-width. Sit down deep with a proud chest, push the floor away.', lower: true },
  'Leg press (feet high & wide)': { img: 'Leg_Press', match: 'closest', src: 'Leg Press', cue: 'Feet high and wide on the plate. Lower until the hips just start to tuck, push through the heels.', lower: true },
  'B-stance hip thrust': { img: 'Barbell_Hip_Thrust', match: 'closest', src: 'Barbell Hip Thrust (one foot forward)', cue: 'Working foot flat, other heel lifted a step forward (kickstand). 80% of the work on the flat foot. Squeeze 1 s.', lower: true },
  'Single-leg hip thrust': { img: 'Single_Leg_Glute_Bridge', match: 'closest', src: 'Single Leg Glute Bridge (shoulders on a bench)', cue: 'Shoulders on the bench, one foot planted. Drive up with that heel, hips level, squeeze.', lower: true, bw: true },
  'Sumo deadlift': { img: 'Sumo_Deadlift', match: 'exact', src: 'Sumo Deadlift', cue: 'Wide stance, toes out, hands inside the knees. Push the knees out, chest up, squeeze the glutes to lock out.', lower: true },
  'Good morning': { img: 'Good_Morning', match: 'exact', src: 'Good Morning', cue: 'Light bar on the upper back, soft knees. Hips back until the hamstrings stretch, squeeze up. Light and slow.', lower: true },
  'Paused hip thrust': { img: 'Barbell_Hip_Thrust', match: 'closest', src: 'Barbell Hip Thrust (light, 3 s hold)', cue: 'Lighter than Monday. Hold every rep 3 s at the top with a hard squeeze.', lower: true },
  // glute and leg accessories
  'Bulgarian split squat': { img: 'Split_Squat_with_Dumbbells', match: 'closest', src: 'Split Squat with Dumbbells (rear foot on bench)', cue: 'Rear foot on a bench, front foot far forward. Lean the torso slightly forward and sink deep: glute stretch at the bottom.', lower: true },
  'DB reverse lunge': { img: 'Dumbbell_Rear_Lunge', match: 'exact', src: 'Dumbbell Rear Lunge', cue: 'Step back long, slight forward lean, push through the front heel to stand.', lower: true },
  'DB step-up': { img: 'Dumbbell_Step_Ups', match: 'exact', src: 'Dumbbell Step Ups', cue: 'Knee-height box. Lean forward a little and drive through the front heel. Don\u2019t push off the back foot. Lower slowly.', lower: true },
  'B-stance DB RDL': { img: 'Stiff-Legged_Dumbbell_Deadlift', match: 'closest', src: 'Stiff-Legged Dumbbell Deadlift (one foot back on toes)', cue: 'Working leg flat, other toes behind for balance. Hips back, feel the stretch, squeeze up.', lower: true },
  'Seated hip abduction': { img: 'Thigh_Abductor', match: 'exact', src: 'Thigh Abductor', cue: 'Lean the torso forward to hit the upper glute. Push out, pause 1 s, control back.', lower: true },
  'Banded seated abduction': { img: null, match: null, src: '', cue: 'Sit on a bench edge, band above the knees, lean forward. Push knees out and pause.', lower: true, bw: true },
  'Cable kickback': { img: 'One-Legged_Cable_Kickback', match: 'exact', src: 'One-Legged Cable Kickback', cue: 'Ankle strap, hinge forward slightly. Kick back and slightly out, pause 1 s, no lower-back arch.', lower: true },
  'Glute kickback machine': { img: 'Glute_Kickback', match: 'closest', src: 'Glute Kickback', cue: 'Push back through the heel, squeeze at the top, control the return.', lower: true },
  '45\u00b0 glute hyperextension': { img: 'Hyperextensions_Back_Extensions', match: 'closest', src: 'Hyperextensions (round upper back, toes out)', cue: 'Toes turned out, pad below the hips, upper back rounded. Lift with the glutes, not the lower back. Squeeze at the top.', lower: true, bw: true },
  'Cable pull-through': { img: 'Pull_Through', match: 'exact', src: 'Pull Through', cue: 'Rope between the legs, hips back, then snap the hips forward and squeeze.', lower: true },
  'Lying leg curl': { img: 'Lying_Leg_Curls', match: 'exact', src: 'Lying Leg Curls', cue: 'Hips pressed into the pad. Curl up, pause, lower for 3 s.', lower: true },
  'Seated leg curl': { img: 'Seated_Leg_Curl', match: 'exact', src: 'Seated Leg Curl', cue: 'Lean forward a little, curl down, pause, control up.', lower: true },
  // upper body and posture
  'Lat pulldown': { img: 'Wide-Grip_Lat_Pulldown', match: 'closest', src: 'Wide-Grip Lat Pulldown (shoulder-width works too)', cue: 'Chest up, pull the bar to the upper chest with the elbows. Control it up.' },
  'Assisted pull-up': { img: 'Band_Assisted_Pull-Up', match: 'exact', src: 'Band Assisted Pull-Up', cue: 'Band or machine assist. Elbows to the ribs, chin over the bar, lower slowly.', bw: true },
  'Seated DB shoulder press': { img: 'Dumbbell_Shoulder_Press', match: 'exact', src: 'Dumbbell Shoulder Press', cue: 'Back on the pad, ribs down. Press up and slightly in, lower to ear level.' },
  'Arnold press': { img: 'Arnold_Dumbbell_Press', match: 'exact', src: 'Arnold Dumbbell Press', cue: 'Start palms facing you, rotate as you press up. Slow down.' },
  'Seated cable row': { img: 'Seated_Cable_Rows', match: 'exact', src: 'Seated Cable Rows', cue: 'Tall spine, pull the handle to the belly button, squeeze the shoulder blades together.' },
  'Chest-supported DB row': { img: 'Dumbbell_Incline_Row', match: 'exact', src: 'Dumbbell Incline Row', cue: 'Chest on an incline bench, row the DBs to the hips, squeeze.' },
  'DB lateral raise': { img: 'Side_Lateral_Raise', match: 'exact', src: 'Side Lateral Raise', cue: 'Slight bend in the elbows, raise to shoulder height leading with the elbows. No swinging.' },
  'Cable lateral raise': { img: 'Cable_Seated_Lateral_Raise', match: 'closest', src: 'Cable Seated Lateral Raise', cue: 'Cable across the body, raise to shoulder height, lower slowly.' },
  'Face pull': { img: 'Face_Pull', match: 'exact', src: 'Face Pull', cue: 'Rope at face height, pull to the eyes, elbows high, thumbs back. Great for posture.' },
  'Band pull-apart': { img: 'Band_Pull_Apart', match: 'exact', src: 'Band Pull Apart', cue: 'Arms straight at chest height, pull the band apart to the chest, squeeze the shoulder blades.', bw: true },
  'Incline push-up': { img: 'Incline_Push-Up', match: 'exact', src: 'Incline Push-Up', cue: 'Hands on a bench, body in one line. Lower the chest to the bench, push away. Lower the bench as you get stronger.', bw: true },
  'DB bench press': { img: 'Dumbbell_Bench_Press', match: 'exact', src: 'Dumbbell Bench Press', cue: 'Shoulder blades pinned, lower to mid-chest, press up.' },
  // core
  'Dead bug': { img: 'Dead_Bug', match: 'exact', src: 'Dead Bug', cue: 'Lower back pressed into the floor. Reach opposite arm and leg away slowly, breathe out.', bw: true },
  'Plank': { img: 'Plank', match: 'exact', src: 'Plank', cue: 'Elbows under shoulders, squeeze glutes, ribs down. Hold good form only.', bw: true, metric: 'sec' }
};

/* group: activation | main | muscle | finisher. rest in seconds. main = key lift for progression. */
const PROGRAM = {
  A: { key: 'A', day: 'Monday', title: 'Session 1', focus: 'Heavy Glutes', exercises: [
    { id: 'A1', group: 'activation', parts: ['Banded glute bridge'], sets: 2, min: 15, max: 15, rest: 30, swap: { label: 'Frog pump 2 \u00d7 20', parts: ['Frog pump'], min: 20, max: 20 } },
    { id: 'A2', group: 'activation', parts: ['Banded lateral walk'], sets: 2, min: 12, max: 12, each: 'each way', rest: 30, swap: { label: 'Banded clamshell', parts: ['Banded clamshell'], min: 15, max: 15 } },
    { id: 'A3', group: 'main', main: true, parts: ['Barbell hip thrust'], sets: 4, min: 6, max: 10, rest: 150, swap: { label: 'Smith machine hip thrust', parts: ['Smith machine hip thrust'] } },
    { id: 'A4', group: 'main', main: true, parts: ['Romanian deadlift'], sets: 3, min: 8, max: 10, rest: 150, swap: { label: 'DB Romanian deadlift', parts: ['DB Romanian deadlift'] } },
    { id: 'A5', group: 'muscle', parts: ['Bulgarian split squat'], sets: 3, min: 8, max: 12, each: 'each leg', rest: 90, swap: { label: 'DB reverse lunge', parts: ['DB reverse lunge'] } },
    { id: 'A6', group: 'muscle', parts: ['Seated hip abduction'], sets: 3, min: 12, max: 20, rest: 60, swap: { label: 'Banded seated abduction 3 \u00d7 20\u201330', parts: ['Banded seated abduction'], min: 20, max: 30 } },
    { id: 'A7', group: 'finisher', parts: ['Cable kickback'], sets: 2, min: 12, max: 15, each: 'each leg', rest: 45, swap: { label: 'Glute kickback machine', parts: ['Glute kickback machine'] } }
  ]},
  B: { key: 'B', day: 'Wednesday', title: 'Session 2', focus: 'Upper Body + Posture', exercises: [
    { id: 'B1', group: 'activation', parts: ['Frog pump'], sets: 2, min: 20, max: 20, rest: 30, swap: { label: 'Banded glute bridge', parts: ['Banded glute bridge'], min: 15, max: 15 } },
    { id: 'B2', group: 'main', main: true, parts: ['Lat pulldown'], sets: 3, min: 8, max: 12, rest: 90, swap: { label: 'Assisted pull-up', parts: ['Assisted pull-up'], min: 5, max: 8 } },
    { id: 'B3', group: 'main', main: true, parts: ['Seated DB shoulder press'], sets: 3, min: 8, max: 12, rest: 90, swap: { label: 'Arnold press', parts: ['Arnold press'] } },
    { id: 'B4', group: 'muscle', parts: ['Seated cable row'], sets: 3, min: 10, max: 12, rest: 75, swap: { label: 'Chest-supported DB row', parts: ['Chest-supported DB row'] } },
    { id: 'B5', group: 'muscle', superset: true, parts: ['DB lateral raise', 'Face pull'], sets: 3, min: 12, max: 15, rest: 60, swap: { label: 'Cable lateral raise + band pull-apart', parts: ['Cable lateral raise', 'Band pull-apart'] } },
    { id: 'B6', group: 'muscle', parts: ['Incline push-up'], sets: 3, min: 8, max: 12, rest: 60, swap: { label: 'DB bench press', parts: ['DB bench press'] } },
    { id: 'B7', group: 'finisher', parts: ['Dead bug'], sets: 3, min: 8, max: 8, each: 'each side', rest: 45, swap: { label: 'Plank, max hold', parts: ['Plank'], holdTime: true } },
    { id: 'B8', group: 'finisher', parts: ['Seated hip abduction'], sets: 2, min: 20, max: 25, rest: 45, swap: { label: 'Banded seated abduction', parts: ['Banded seated abduction'] } }
  ]},
  C: { key: 'C', day: 'Friday', title: 'Session 3', focus: 'Lower Body (Glutes + Legs)', exercises: [
    { id: 'C1', group: 'activation', parts: ['Banded clamshell'], sets: 2, min: 15, max: 15, each: 'each side', rest: 30, swap: { label: 'Banded lateral walk', parts: ['Banded lateral walk'], min: 12, max: 12 } },
    { id: 'C2', group: 'main', main: true, parts: ['Smith machine squat'], sets: 3, min: 8, max: 10, rest: 150, swap: { label: 'Leg press (feet high & wide)', parts: ['Leg press (feet high & wide)'], min: 10, max: 12 } },
    { id: 'C3', group: 'main', main: true, parts: ['B-stance hip thrust'], sets: 3, min: 8, max: 12, each: 'each leg', rest: 90, swap: { label: 'Single-leg hip thrust', parts: ['Single-leg hip thrust'] } },
    { id: 'C4', group: 'muscle', parts: ['DB step-up'], sets: 3, min: 8, max: 12, each: 'each leg', rest: 90, swap: { label: 'DB reverse lunge', parts: ['DB reverse lunge'] } },
    { id: 'C5', group: 'muscle', parts: ['45\u00b0 glute hyperextension'], sets: 3, min: 12, max: 15, rest: 60, swap: { label: 'Cable pull-through', parts: ['Cable pull-through'] } },
    { id: 'C6', group: 'muscle', parts: ['Lying leg curl'], sets: 3, min: 10, max: 12, rest: 60, swap: { label: 'Seated leg curl', parts: ['Seated leg curl'] } },
    { id: 'C7', group: 'finisher', parts: ['Seated hip abduction'], sets: 3, min: 15, max: 20, rest: 45, swap: { label: 'Banded seated abduction', parts: ['Banded seated abduction'], min: 20, max: 30 } }
  ]},
  D: { key: 'D', day: 'Saturday', title: 'Session 4 (optional)', focus: 'Glute Shape + Pump', optional: true, exercises: [
    { id: 'D1', group: 'activation', parts: ['Frog pump'], sets: 2, min: 20, max: 20, rest: 30, swap: { label: 'Banded glute bridge', parts: ['Banded glute bridge'], min: 15, max: 15 } },
    { id: 'D2', group: 'main', main: true, parts: ['Sumo deadlift'], sets: 3, min: 6, max: 10, rest: 150, swap: { label: 'Good morning 3 \u00d7 10\u201312', parts: ['Good morning'], min: 10, max: 12 } },
    { id: 'D3', group: 'muscle', parts: ['B-stance DB RDL'], sets: 3, min: 10, max: 12, each: 'each leg', rest: 75, swap: { label: 'DB Romanian deadlift', parts: ['DB Romanian deadlift'] } },
    { id: 'D4', group: 'muscle', parts: ['Paused hip thrust'], sets: 3, min: 12, max: 15, rest: 75, swap: { label: 'Smith machine hip thrust (3 s hold)', parts: ['Smith machine hip thrust'] } },
    { id: 'D5', group: 'muscle', parts: ['Cable kickback'], sets: 3, min: 12, max: 15, each: 'each leg', rest: 45, swap: { label: 'Glute kickback machine', parts: ['Glute kickback machine'] } },
    { id: 'D6', group: 'finisher', superset: true, parts: ['Banded lateral walk', 'Banded clamshell'], sets: 2, min: 15, max: 15, each: 'each', rest: 45, swap: { label: 'Seated hip abduction', parts: ['Seated hip abduction'] } }
  ]}
};

// Weekday (0 = Sun) -> session. R = rest/walk day.
const WEEK = { 0: 'R', 1: 'A', 2: 'R', 3: 'B', 4: 'R', 5: 'C', 6: 'D' };
const WEEK_TABLE = [
  ['Monday', 'Session 1 · Heavy Glutes'], ['Tuesday', 'Rest · 8–10k steps'], ['Wednesday', 'Session 2 · Upper + Posture'],
  ['Thursday', 'Rest · 8–10k steps'], ['Friday', 'Session 3 · Lower Body'], ['Saturday', 'Session 4 (optional) · Glute Shape'], ['Sunday', 'Rest']
];

const NUTRITION = (typeof FOOD_PLAN !== 'undefined' && FOOD_PLAN.targets) ? FOOD_PLAN.targets : { kcal: 2000, protein: 95, carbs: 200, fat: 75 };
const GROUP_LABEL = { activation: 'Activation: wake the glutes up', main: 'Main lifts: get stronger here', muscle: 'Shape work', finisher: 'Finisher: pump + core' };

/* No demo videos yet (none verified). The still image + cue shows each move. */
const VIDEO = {};
const APP_HEADING = 'Margo Program';

const TEMPO_INFO = {
  power: { label: 'Strong + smooth', cls: 't-pow', cue: 'Lower in 2–3 s, drive up strong, squeeze the glutes 1 s at the top.' },
  squeeze: { label: 'Squeeze + pause', cls: 't-exp', cue: 'Slow and controlled. Hold and squeeze 1–2 s at the top every rep. Feel the glute, not the lower back.' },
  controlled: { label: 'Controlled', cls: 't-con', cue: '2 s down, no swinging, full range.' },
  brace: { label: 'Brace + hold', cls: 't-hold', cue: 'Ribs down, glutes tight, breathe.' }
};
const TEMPO_GROUPS = {
  power: ['Barbell hip thrust', 'Smith machine hip thrust', 'Romanian deadlift', 'DB Romanian deadlift', 'Smith machine squat', 'Leg press (feet high & wide)', 'Sumo deadlift', 'Good morning', 'Bulgarian split squat', 'DB reverse lunge', 'DB step-up', 'Lat pulldown', 'Assisted pull-up', 'Seated DB shoulder press', 'Arnold press', 'DB bench press'],
  squeeze: ['Banded glute bridge', 'Frog pump', 'Banded lateral walk', 'Banded clamshell', 'B-stance hip thrust', 'Single-leg hip thrust', 'Paused hip thrust', 'B-stance DB RDL', 'Seated hip abduction', 'Banded seated abduction', 'Cable kickback', 'Glute kickback machine', '45\u00b0 glute hyperextension', 'Cable pull-through'],
  controlled: ['Lying leg curl', 'Seated leg curl', 'Seated cable row', 'Chest-supported DB row', 'DB lateral raise', 'Cable lateral raise', 'Face pull', 'Band pull-apart', 'Incline push-up', 'Dead bug'],
  brace: ['Plank']
};
for (const [k, list] of Object.entries(TEMPO_GROUPS)) for (const m of list) MOV[m].tempo = k;

/* Lockie's HIIT and mobility are not part of Margo's app. Empty stubs keep shared code safe. */
const GOALS = {}, HIIT = {}, HIIT_ROTATION = [], HIIT_ALT = {}, EFFORT = [], MOB = {}, MOBILITY = {}, MOB_ORDER = [], AT_CUES = [];
