const express = require('express')

const getAllTasks = (req, res) => {
    res.send('All items bro')
}
const getTaskById = (req, res) => {
    res.json({id: req.params.id})
}

const createTask = (req, res) => {
    res.json(req.body)
}

const updateTask = (req, res) => {
    res.send('Task updated sucessfully')
}

const deleteTask = (req, res) => {
    res.send('Task deleted sucessfully')
}

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask }