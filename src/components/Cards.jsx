import { useState, useEffect } from "react";
import users from "../data.json";
import { lazy, Suspense } from 'react';
import Loading from './Loading';
const CardProfile = lazy(() => import('./CardProfile'));

function Cards() {

  useEffect(() => {
  }, []);

  return (
    <div className="card-wrapper">
        {users.map((user, index) => {
            return <>
                <Suspense fallback={<Loading />}>
                    <CardProfile user={user} />
                </Suspense>
            </>
        })}
    </div>
  );
}

export default Cards;
