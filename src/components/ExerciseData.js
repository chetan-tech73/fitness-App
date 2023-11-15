const exerciseData = [
    {
        category: 'Strength Training',
        imageSrc: '../logo192.png', 
        description: 'Strength training exercises focus on building muscle and increasing strength.',
        
        exercises: [
          {
    id: 1,
    name: 'Push-Ups',
    instructions: (
        <div>
            <p>1. Warm-up:</p>
            <p>Begin with a brief warm-up to prepare your upper body.</p>
            <p>Perform arm circles, shoulder stretches, and push your hands against a wall for a few minutes.</p>
            <p>2. Proper Form:</p>
            <p>- Start in a plank position with your hands placed slightly wider than shoulder-width apart.</p>
            <p>- Keep your body in a straight line from head to heels.</p>
            <p>- Engage your core muscles to maintain stability.</p>
            <p>- Look down at the ground to keep your neck aligned with your spine.</p>
            <p>3. Execution:</p>
            <p>- Inhale and slowly lower your body toward the ground by bending your elbows.</p>
            <p>- Keep your elbows at about a 45-degree angle from your body.</p>
            <p>- Lower yourself until your chest is just above the ground or as far as your strength allows.</p>
            <p>4. Push Back Up:</p>
            <p>- Exhale and push your body back up to the starting position by straightening your arms.</p>
            <p>- Make sure to fully extend your elbows without locking them.</p>
            <p>5. Repetitions and Sets:</p>
            <p>- Start with 3 sets of 8-10 repetitions if you are a beginner.</p>
            <p>- Increase the sets and repetitions as you get stronger.</p>
            <p>6. Safety Tips:</p>
            <p>- Maintain proper form throughout the exercise to avoid strain or injury.</p>
            <p>- If full push-ups are too challenging, you can modify by doing knee push-ups or incline push-ups with your hands on an elevated surface.</p>
        </div>
    ),
    videoUrl: 'link to descriptive video'
},

           {
    id: 2,
    name: 'Squats',
    instructions: (
        <div>
            <p>1. Warm-up:</p>
            <p>Begin with a brief warm-up to prepare your muscles.</p>
            <p>Perform light cardio exercises like jumping jacks for 5-10 minutes.</p>
            <p>2. Proper Form:</p>
            <p>- Stand with your feet shoulder-width apart, toes pointing slightly outward.</p>
            <p>- Keep your back straight, chest up, and shoulders relaxed.</p>
            <p>- Engage your core muscles for stability.</p>
            <p>3. Execution:</p>
            <p>- Inhale and start the squat by pushing your hips back as if you are sitting back into a chair.</p>
            <p>- Bend your knees and lower your body while keeping your heels on the ground.</p>
            <p>- Go as low as your flexibility allows, ideally until your thighs are parallel to the ground. Keep your knees in line with your toes.</p>
            <p>- Exhale and push through your heels to return to the starting position.</p>
            <p>4. Repetitions and Sets:</p>
            <p>- Start with 3 sets of 10-12 repetitions if you are a beginner.</p>
            <p>- As you progress, increase the sets and repetitions.</p>
            <p>5. Rest:</p>
            <p>- Rest for 30-60 seconds between sets to allow your muscles to recover.</p>
            <p>6. Safety Tips:</p>
            <p>- Do not let your knees extend beyond your toes.</p>
            <p>- Keep your weight on your heels, not your toes.</p>
        </div>
    ),
    videoUrl: 'link to descriptive video'
}
,
            {
    id: 3,
    name: 'Lunges',
    instructions: (
        <div>
            <p>1. Warm-up:</p>
            <p>Begin with a brief warm-up to prepare your leg muscles.</p>
            <p>Perform leg swings, calf raises, and light leg stretches for 5-10 minutes.</p>
            <p>2. Proper Form:</p>
            <p>- Stand up straight with your feet hip-width apart.</p>
            <p>- Keep your chest up, shoulders relaxed, and engage your core for balance.</p>
            <p>3. Execution:</p>
            <p>- Take a step forward with your right foot, about 2-3 feet.</p>
            <p>- Lower your body by bending both knees until your right thigh is parallel to the ground, and your left knee is hovering just above the floor.</p>
            <p>- Your front knee should be directly above your ankle, and your back knee should point downward.</p>
            <p>- Keep your upper body upright and avoid leaning forward.</p>
            <p>4. Repetitions and Sets:</p>
            <p>- Start with 3 sets of 10-12 repetitions per leg if you are a beginner.</p>
            <p>- Increase the sets and repetitions as you progress.</p>
            <p>5. Safety Tips:</p>
            <p>- Be mindful of your balance and stability, especially if you are new to lunges.</p>
            <p>- Ensure your front knee does not extend past your toes to avoid knee strain.</p>
        </div>
    ),
    videoUrl: 'link to descriptive video'
}
,
            {
    id: 4,
    name: 'Planks',
    instructions: (
        <div>
            <p>1. Warm-up:</p>
            <p>Begin with a brief warm-up to prepare your core and upper body.</p>
            <p>Perform some light torso twists, leg raises, or cat-cow stretches for 5-10 minutes.</p>
            <p>2. Proper Form:</p>
            <p>- Start by getting into a push-up position with your elbows bent at a 90-degree angle and your weight resting on your forearms.</p>
            <p>- Your elbows should be directly under your shoulders.</p>
            <p>- Keep your body in a straight line from head to heels.</p>
            <p>- Engage your core muscles to maintain stability.</p>
            <p>3. Execution:</p>
            <p>- Hold this position, keeping your body as straight as possible.</p>
            <p>- Focus on your breathing; take slow, deep breaths while holding the plank.</p>
            <p>4. Repetitions and Sets:</p>
            <p>- Start with holding the plank for 20-30 seconds if you are a beginner.</p>
            <p>- Gradually increase the duration as you get stronger. Aim for 30 seconds to 2 minutes per set.</p>
            <p>5. Safety Tips:</p>
            <p>- Maintain proper alignment and keep your back flat; avoid arching or rounding your lower back.</p>
            <p>- Do not allow your hips to sag towards the ground.</p>
            <p>- Keep your head in a neutral position, looking down at the floor.</p>
        </div>
    ),
    videoUrl: 'link to descriptive video'
}
,
        ]
    },
    {
        category: 'Cardiovascular Workouts',
         imageSrc: '../logo192.png', 
        description: 'Cardiovascular workouts help improve cardiovascular health and burn calories.',
        
        exercises: [
            {
                id: 1,
                name: 'Shadow Boxing',
                instructions: 'instructions for Shadow Boxing goes here......',
                videoUrl: 'link to descriptive video' 
            },
            {
                id: 2,
                name: 'Burpee',
                instructions: 'instructions for Burpee goes here......',
                videoUrl: 'link to descriptive video' 
            },
            {
                id: 3,
                name: 'Mountain Climbing',
                instructions: 'instructions for Mountain Climbing goes here......',
                videoUrl: 'link to descriptive video' 
            },
            {
                id: 4,
                name: 'Jumping Jack',
                instructions: 'instructions for Jumping Jack goes here......',
                videoUrl: 'link to descriptive video' 
            },
        ]
    },
     {
      category: 'Yoga & Pilates',
       imageSrc: '../logo192.png', 
      description: 'Yoga and Pilates exercises promote flexibility, balance, and relaxation.',
       
        
      exercises: [
           {
            id: 1,
            name: 'Single Leg Circle',
            instructions: 'instructions for Single Leg Circle goes here.......',
            videoUrl: 'link to descriptive video'
           },
           {
            id: 2,
            name: 'Childs Pose',
            instructions: 'instructions for Childs Pose goes here.......',
            videoUrl: 'link to descriptive video'
           },
           {
            id: 3,
            name: 'Pilates Roll Up',
            instructions: 'instructions for Pilates Roll Up goes here.......',
            videoUrl: 'link to descriptive video'
           },
           {
            id: 4,
            name: 'Tree Pose',
            instructions: 'instructions for Tree Pose goes here.......',
            videoUrl: 'link to descriptive video'
           },
      ]
     },
     { 
        category: 'BodyWeight Exercises',
        imageSrc: '../logo512.png', 
        description: 'Bodyweight exercises use your own body weight for resistance and require minimal equipment.',
        
        exercises: [
            {
                id: 1,
                name: 'Air Squat',
                instructions: 'instructions for Air Squat goes here.....',
                videoUrl: 'link to descriptive video'
            },
            {
                id: 2,
                name: 'Pistol Squat',
                instructions: 'instructions for Pistol Squat goes here.....',
                videoUrl: 'link to descriptive video'
            },
            {
                id: 3,
                name: 'Bicycle Crunches',
                instructions: 'instructions for Bicycle Crunches goes here.....',
                videoUrl: 'link to descriptive video'
            },
            {
                id: 4,
                name: 'Diamond Push-Up',
                instructions: 'instructions for Air Squat goes here.....',
                videoUrl: 'link to descriptive video'
            },
        ],
     }
];

export default exerciseData;