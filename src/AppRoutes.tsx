import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home/Home";
const MealDetails = React.lazy(() => import("./pages/MealDetail/MealDetails"));

const AppRoutes = () => {
  return (
    <ErrorBoundary fallback={<h1>Error</h1>}>
      <Suspense fallback={<h1>Loading</h1>}>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/mealDetails/:id"
              element={
                <Suspense fallback={<h1>Loading</h1>}>
                  <MealDetails />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
