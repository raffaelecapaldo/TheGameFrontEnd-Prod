import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useResultStore = defineStore('results', () => {

  const allResults = ref(null)
  const allResultsWithPagination = ref(null)
  const singleResult = ref(null)
  

  function getAllResults()
  {
    const API_BASE = 'http://127.0.0.1:8000/api/characters'
    axios.get(API_BASE).then(res =>
      {
        if (res.data.success)
        {
          allResults.value = res.data.results
        }

      })
  }
  
  function getAllResultsWithPaginate(quantity)
  {
    const API_BASE = 'http://127.0.0.1:8000/api/characters?quantity='
    axios.get(API_BASE+quantity).then(res =>
      {
        if (res.data.success)
        {
          allResultsWithPagination.value = res.data.results.data
        }

      })
  }

  function getOneResultWithID(id)
  {
    const API_BASE = 'http://127.0.0.1:8000/api/characters/'
    axios.get(API_BASE+id).then(res =>
      {
        if (res.data.success)
        {
          singleResult.value = res.data.results
        }

      })
  }

  return { allResults, allResultsWithPagination, singleResult, getAllResults, getAllResultsWithPaginate, getOneResultWithID }
})
