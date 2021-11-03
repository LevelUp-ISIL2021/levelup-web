import React from "react";
import ReviewCard from "../components/ReviewCard";

export default function Reviews() {
  /*
  · _id: ObjectId
  · userId: ObjectId (referencia a un usuario de la colección 'users')
  · content: string
  · approved: boolean
  · updatedAt: timestamp
  · createdAt: timestamp
  */

  const reviews = [
    {
      _id: '1',
      userId: '1',
      content: 'Muy buen juego, a mi hijo le encantó!',
      approved: true,
      updatedAt: new Date('2021-10-08T21:25:58.230+00:00'),
      createdAt: new Date('2021-10-08T21:25:58.230+00:00')
    },
    {
      _id: '2',
      userId: '2',
      content: 'Mi hija lo juega todo el día! Asombroso....',
      approved: true,
      updatedAt: new Date('2021-10-09T21:25:58.230+00:00'),
      createdAt: new Date('2021-10-09T21:25:58.230+00:00')
    },
    {
      _id: '3',
      userId: '3',
      content: 'Gran juego, deberían haber más juegos como este. Lo recomiendo a todos los padres',
      approved: true,
      updatedAt: new Date('2021-10-10T21:25:58.230+00:00'),
      createdAt: new Date('2021-10-10T21:25:58.230+00:00')
    },
    {
      _id: '1',
      userId: '1',
      content: 'Muy buen juego, a mi hijo le encantó!',
      approved: true,
      updatedAt: new Date('2021-10-08T21:25:58.230+00:00'),
      createdAt: new Date('2021-10-08T21:25:58.230+00:00')
    },
    {
      _id: '2',
      userId: '2',
      content: 'Mi hija lo juega todo el día! Asombroso....',
      approved: true,
      updatedAt: new Date('2021-10-09T21:25:58.230+00:00'),
      createdAt: new Date('2021-10-09T21:25:58.230+00:00')
    },
    {
      _id: '3',
      userId: '3',
      content: 'Gran juego, deberían haber más juegos como este. Lo recomiendo a todos los padres',
      approved: true,
      updatedAt: new Date('2021-10-10T21:25:58.230+00:00'),
      createdAt: new Date('2021-10-10T21:25:58.230+00:00')
    }
  ];

    return (
      <div>
          <h1 style={{ textAlign: 'center' }}>Los padres de familia opinan</h1>
          {reviews.map((review) =>
            <ReviewCard key={review._id} review={review} />
          )}
      </div>
    );
}