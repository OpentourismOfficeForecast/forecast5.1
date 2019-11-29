import pandas as pd
from calendar import monthrange
import numpy as np


def get_predictions(year, month):
    """
    month = Month to be predicted, expected format MM
    year = Year of month to be predicted, expected format yyyy
    """
    
    start_date = str(year)+"-"+str(month)+"-01"
    end_date = str(year)+"-"+str(month)+"-"+str(monthrange(year, month)[1])

    date_range = pd.date_range(start_date,end_date, freq='D').strftime("%Y-%m-%d").tolist()

    # predictfunction
    # ..
    
    pred_arr = []
    
    
    for date in date_range:
        
        pred_mail = np.random.randint(low=1, high=100)
        pred_tel = np.random.randint(low=1, high=100)
        pred_counter = np.random.randint(low=1, high=100)
        
        pred_dict = {'date': date,  
                     'predictions':{'mail' : pred_mail, 
                                    'tel' : pred_tel, 
                                    'counter' : pred_counter
                                    }
                     }
        
   
        pred_arr.append(pred_dict)

    print(pred_arr)
    
    return pred_arr



#if __name__ == "__main__":
#    get_predictions(2019,10)

