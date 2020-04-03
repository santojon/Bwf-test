import { Service } from 'back-sj'
import { Dashboard } from '../model/dashboard'
import DbArray = require('dbarray')
import { DataBaseService } from './databaseService'

/**
 * Service responsible to manage Dashboards from database
 */
@Service
export class DashboardService {
    constructor(private databaseService: DataBaseService) { }

    /**
     * Save a Dashboard to database
     * @param dashboard the Dashboard to save
     */
    saveDashboard(dashboard: Dashboard): Dashboard | null {
        let dash = new Dashboard({
            id: dashboard.id,
            label: dashboard.label,
            price: dashboard.price,
            owner: dashboard.owner
        })
        return (dash as any).save() as Dashboard
    }

    /**
     * Get all Dashboards from database
     */
    getDashboards(): DbArray<Dashboard> {
        return (Dashboard as any).findAll() as DbArray<Dashboard>
    }
}