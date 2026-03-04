import Sidebar from './components/Sidebar';
import NoteInput from './components/NoteInput';
import NoteCard, { Note } from './components/NoteCard';

const dummyNotes: Note[] = [
  {
    id: '1',
    title: 'Grocery List',
    content: 'Milk\nEggs\nBread\nBananas\nOatmeal',
    color: 'transparent',
  },
  {
    id: '2',
    title: 'Project Ideas 2026',
    content: '1. AI-powered note taking\n2. Next.js dashboard\n3. WebGL portfolio\n4. React Native app for habits',
    color: '#f28b82', // Red
  },
  {
    id: '3',
    title: 'Meeting Notes: Design Sync',
    content: 'Discussed the new design system.\nWe need to ensure all components use the new CSS variables.\nAction items:\n- Update buttons\n- Add dark mode support',
    color: '#fbbc04', // Yellow
  },
  {
    id: '4',
    title: 'Book Recommendations',
    content: 'The Design of Everyday Things\nAtomic Habits\nClean Code\nThinking, Fast and Slow',
    color: '#ccff90', // Green
  },
  {
    id: '5',
    title: 'Weekend Trip',
    content: 'Pack hiking boots\nBuy trail mix\nBook Airbnb in the mountains\nCheck weather forecast',
    color: '#cbf0f8', // Blue
  },
  {
    id: '6',
    title: 'Workout Routine',
    content: 'Monday: Chest & Triceps\nWednesday: Back & Biceps\nFriday: Legs & Core\nSunday: Active Recovery',
    color: 'transparent',
  },
  {
    id: '7',
    title: 'Quotes',
    content: '"The only way to do great work is to love what you do." - Steve Jobs\n"Done is better than perfect." - Sheryl Sandberg',
    color: '#d7aefb', // Purple
  },
];

export default function Home() {
  return (
    <div className="flex h-full">
      <Sidebar />
      <main className="flex-1 overflow-y-auto w-full p-4">
        <NoteInput />

        {/* Notes Grid */}
        <div className="max-w-7xl mx-auto mt-8 px-4 md:px-8">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {dummyNotes.map((note) => (
              <div key={note.id} className="break-inside-avoid">
                <NoteCard note={note} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
