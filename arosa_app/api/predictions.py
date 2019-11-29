import pandas as pd
#import pprint
from calendar import monthrange


def get_predictions(year, month):
    """
    month = Month to be predicted, expected format MM
    year = Year of month to be predicted, expected format yyyy
    """
    
    start_date = str(year)+"-"+str(month)+"-"+str(monthrange(year, month)[0])
    end_date = str(year)+"-"+str(month)+"-"+str(monthrange(year, month)[1])

    date_range = pd.date_range(start_date,end_date, freq='D').strftime("%Y-%m-%d").tolist()

    print(date_range)

    # predictfunction
    # ..
    
    pred_arr = []
    
    
    for date in date_range:
        
        pred_mail = 2
        pred_tel = 5
        pred_counter = 10
        
        pred_dict = {'date': date,  
                     'predictions':{'mail' : pred_mail, 
                                    'tel' : pred_tel, 
                                    'counter' : pred_counter
                                    }
                     }
        

    
        pred_arr.append(pred_dict)
    

        
    #pprint.pprint(pred_arr)
    #pprint.pprint(date_range)
    
    return pred_arr



#if __name__ == "__main__":
#   get_predictions(8,2019)

