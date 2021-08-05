import axios from 'axios'

const token = JSON.parse(localStorage.getItem('Auth'))?.token

export async function getUserData() {
  try {
    const response = await axios.get(
      'https://HealthStore.bravesoldier.repl.co/user',
      {
        headers: {
          Authorization: token,
        },
      }
    )
    console.log('success-getuser')
    return response.data
  } catch (error) {
    console.log('fail-getuser')

    if (axios.isAxiosError(error)) {
      const serverError = error
      if (serverError && serverError.response) {
        return {
          ...serverError.response.data,
          status: serverError.response.status,
        }
      }
    }
  }
}

export async function wishlistAdd(productId) {
  try {
    const response = await axios.post(
      'https://HealthStore.bravesoldier.repl.co/user/wishlistadd',
      {
        productId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error
      if (serverError && serverError.response) {
        return {
          ...serverError.response.data,
          status: serverError.response.status,
        }
      }
    }
  }
}

export async function wishlistRemove(productId) {
  try {
    const response = await axios.post(
      'https://HealthStore.bravesoldier.repl.co/user/wishlistremove',
      {
        productId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error
      if (serverError && serverError.response) {
        return {
          ...serverError.response.data,
          status: serverError.response.status,
        }
      }
    }
  }
}

export async function cartAdd(productId) {
  try {
    const response = await axios.post(
      'https://HealthStore.bravesoldier.repl.co/user/cartadd',
      {
        productId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error
      if (serverError && serverError.response) {
        return {
          ...serverError.response.data,
          status: serverError.response.status,
        }
      }
    }
  }
}

export async function cartRemove(productId) {
  try {
    const response = await axios.post(
      'https://HealthStore.bravesoldier.repl.co/user/cartremove',
      {
        productId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error
      if (serverError && serverError.response) {
        return {
          ...serverError.response.data,
          status: serverError.response.status,
        }
      }
    }
  }
}

export async function incrementQuantity(productId) {
  try {
    const response = await axios.post(
      'https://HealthStore.bravesoldier.repl.co/user/incrementQuantity',
      {
        productId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error
      if (serverError && serverError.response) {
        return {
          ...serverError.response.data,
          status: serverError.response.status,
        }
      }
    }
  }
}

export async function decrementQuantity(productId) {
  try {
    const response = await axios.post(
      'https://HealthStore.bravesoldier.repl.co/user/decrementQuantity',
      {
        productId,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    )
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const serverError = error
      if (serverError && serverError.response) {
        return {
          ...serverError.response.data,
          status: serverError.response.status,
        }
      }
    }
  }
}
