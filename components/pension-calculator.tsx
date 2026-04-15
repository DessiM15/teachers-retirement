"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function PensionCalculator() {
  const [currentAge, setCurrentAge] = useState("");
  const [salary, setSalary] = useState("");
  const [yearsOfService, setYearsOfService] = useState("");
  const [retirementAge, setRetirementAge] = useState("65");
  const [multiplier, setMultiplier] = useState("2.0");

  const handleRetirementAgeChange = (value: string | null) => {
    if (value) setRetirementAge(value);
  };
  const handleMultiplierChange = (value: string | null) => {
    if (value) setMultiplier(value);
  };

  const currentAgeNum = parseFloat(currentAge) || 0;
  const salaryNum = parseFloat(salary) || 0;
  const yearsNum = parseFloat(yearsOfService) || 0;
  const retirementAgeNum = parseFloat(retirementAge);
  const multiplierNum = parseFloat(multiplier);

  const additionalYears = Math.max(0, retirementAgeNum - currentAgeNum);
  const totalYears = yearsNum + additionalYears;
  const annualPension = salaryNum * (multiplierNum / 100) * totalYears;
  const monthlyPension = annualPension / 12;
  const replacementRate = salaryNum > 0 ? (annualPension / salaryNum) * 100 : 0;

  const hasInput = currentAgeNum > 0 && salaryNum > 0;

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Your Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="currentAge">Current Age</Label>
            <Input
              id="currentAge"
              type="number"
              placeholder="e.g. 45"
              value={currentAge}
              onChange={(e) => setCurrentAge(e.target.value)}
              min={20}
              max={80}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="salary">Current Annual Salary ($)</Label>
            <Input
              id="salary"
              type="number"
              placeholder="e.g. 65000"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              min={0}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="yearsOfService">
              Current Years of Service
            </Label>
            <Input
              id="yearsOfService"
              type="number"
              placeholder="e.g. 20"
              value={yearsOfService}
              onChange={(e) => setYearsOfService(e.target.value)}
              min={0}
              max={50}
            />
          </div>

          <div className="space-y-2">
            <Label>Target Retirement Age</Label>
            <Select value={retirementAge} onValueChange={handleRetirementAgeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select retirement age" />
              </SelectTrigger>
              <SelectContent>
                {[55, 57, 58, 59, 60, 62, 65, 67, 70].map((age) => (
                  <SelectItem key={age} value={String(age)}>
                    {age}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Benefit Multiplier (%)</Label>
            <Select value={multiplier} onValueChange={handleMultiplierChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select multiplier" />
              </SelectTrigger>
              <SelectContent>
                {["1.5", "1.67", "1.8", "2.0", "2.2", "2.5", "3.0"].map(
                  (m) => (
                    <SelectItem key={m} value={m}>
                      {m}%
                    </SelectItem>
                  )
                )}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className={hasInput ? "" : "opacity-60"}>
        <CardHeader>
          <CardTitle>Estimated Pension</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Pension</p>
              <p className="text-3xl font-bold text-primary">
                ${hasInput ? monthlyPension.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "---"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Annual Pension</p>
              <p className="text-3xl font-bold text-primary">
                ${hasInput ? annualPension.toLocaleString("en-US", { maximumFractionDigits: 0 }) : "---"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-muted-foreground">Replacement Rate</p>
              <p className="text-2xl font-semibold text-foreground">
                {hasInput ? `${replacementRate.toFixed(1)}%` : "---"}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Total Years at Retirement
              </p>
              <p className="text-2xl font-semibold text-foreground">
                {hasInput ? totalYears.toFixed(0) : "---"}
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-muted p-4">
            <p className="text-xs font-medium text-muted-foreground mb-1">
              Formula Used
            </p>
            <p className="text-sm text-foreground">
              Annual Pension = Salary x (Multiplier / 100) x Total Years
            </p>
          </div>

          <p className="text-xs text-muted-foreground leading-relaxed">
            This calculator provides estimates only and does not account for
            cost-of-living adjustments, early retirement penalties, or
            plan-specific rules. Please consult with one of our advisors for a
            personalized analysis.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
