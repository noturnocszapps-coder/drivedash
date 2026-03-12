<Routes>
  <Route path="/" element={<Navigate to="/login" replace />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/projection" element={<GoalProjection />} />
  <Route path="/consumption" element={<FuelConsumption />} />
  <Route path="/simulator" element={<Simulator />} />
  <Route path="/comparison" element={<Comparison />} />
  <Route path="/rides" element={<Rides />} />
  <Route path="/expenses" element={<Expenses />} />
  <Route path="/fuel" element={<FuelingPage />} />
  <Route path="/maintenance" element={<MaintenancePage />} />
  <Route path="/reports" element={<Reports />} />
  <Route path="/tracking" element={<Tracking />} />
  <Route path="/vehicle-costs" element={<VehicleCosts />} />
  <Route path="/settings" element={<Settings />} />
  <Route path="*" element={<Navigate to="/login" replace />} />
</Routes>