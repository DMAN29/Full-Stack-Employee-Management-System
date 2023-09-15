package com.ems.service;

import com.ems.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployee();

//    EmployeeDto deleteEmployeeById(Long employeeId);

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee);

    void deleteEmployee(Long employeeId);

}
