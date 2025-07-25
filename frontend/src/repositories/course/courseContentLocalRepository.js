import { defaultChapters } from '../../utils/defaults'

const courseContentLocalRepository = {
  async getAllChapters() {
    return {
      data: defaultChapters,
      meta: {
        pagination: {
          page: 1,
          pageSize: defaultChapters.length,
          total: defaultChapters.length,
          pageCount: 1
        }
      }
    }
  }
}

export default courseContentLocalRepository
