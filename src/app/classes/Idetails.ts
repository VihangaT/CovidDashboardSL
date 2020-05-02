export interface Idetails{
    update_date_time:string; //last time that the api got updated
    local_new_cases:string;	    //Confirmed COVID-19 cases reported during last 24 hours
    local_active_cases:number;	//Confirmed COVID-19 cases currently on treatment at the Hospitals in Sri Lanka
    local_total_cases:number;	//Cumulative count of confirmed COVID-19 cases in Sri Lanka
    local_deaths:number;	    //Total deaths due to COVID-19 reported in Sri Lanka
    local_recovered:number; 	//Total COVID-19 cases recovered and discharged in Sri Lanka
    local_total_number_of_individuals_in_hospitals:number;	//Total suspected COVID-19 cases currently under investigations in hospitals
    global_new_cases:number;	    //Global confirmed COVID-19 cases reported during last 24 hours
    global_total_cases:number;	    //Total global confirmed COVID-19 cases
    global_deaths:number;	            //  Total global deaths due to COVID-19
    global_new_deaths:number;	        //Global deaths due to COVID-19 reported during last 24 hours
    global_recovered:number;	        //Total Global COVID-19 cases who recovered
    total_pcr_testing_count:number;
}