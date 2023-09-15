package com.ems.service.impl;

import com.ems.dto.EmployeeDto;
import com.ems.entity.Employee;
import com.ems.exception.ResourceNotFoundException;
import com.ems.mapper.EmployeeMapper;
import com.ems.repository.EmployeeRepository;
import com.ems.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee saverdEmployee = employeeRepository.save(employee);
        return  EmployeeMapper.mapToEmployeeDto(saverdEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee with given id : "+employeeId+" doesn't exist in the system"));
        return EmployeeMapper.mapToEmployeeDto(employee);

    }

    @Override
    public List<EmployeeDto> getAllEmployee() {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream().map((employee)->EmployeeMapper.mapToEmployeeDto(employee)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updateEmployee) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()->new ResourceNotFoundException("Employee with id: "+employeeId+" doesn't exits in the system"));
        employee.setFirstName(updateEmployee.getFirstName());
        employee.setLastName(updateEmployee.getLastName());
        employee.setEmail(updateEmployee.getEmail());


        Employee updatedEmployeeObj = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId).orElseThrow(()-> new ResourceNotFoundException("Employee with id: \"+employeeId+\" doesn't exits in the system"));
        employeeRepository.deleteById(employeeId);
    }


}
