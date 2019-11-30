import pandas as pd
from calendar import monthrange


def get_predictions(year, month):
    """
    month = Month to be predicted, expected format MM
    year = Year of month to be predicted, expected format yyyy
    """
    
    start_date = str(year)+"-"+str(month)+"-01"
    end_date = str(year)+"-"+str(month)+"-"+str(monthrange(year, month)[1])

    date_range = pd.date_range(start_date,end_date, freq='D').strftime("%Y-%m-%d").tolist()

    # predictfunction    
    pred_arr = []
    file_name = '../predictions/model_'+str(year)+'_'+str(month)+'.csv'
    
    try:
        predictions = load_predictions(file_name)
        predictions = predictions.round()
    except:
        print("An exception occurred")
        predictions = pd.DataFrame(data = date_range,columns=['Datum'])
        

    
    #pred_mail = np.random.randint(low=1, high=100)
    #pred_counter = np.random.randint(low=1, high=100)
    #pred_tel = np.random.randint(low=1, high=100)
    
    for index,row in predictions.iterrows():
        
        # check predictions dataframe for 'Datum'
        if 'Datum' in predictions.columns:
            date = row['Datum']
        else:
            break;

        # check predictions dataframe for 'Mail'
        if 'Mail' in predictions.columns:
            pred_mail = row['Mail']
        else:
            pred_mail = 0

        # check predictions dataframe for 'Schalter'
        if 'Schalter' in predictions.columns:
            pred_counter = row['Schalter']
        else:
            pred_counter = 0

        # check predictions dataframe for 'Tel'
        if 'Tel' in predictions.columns:
            pred_tel = row['Tel']
        else:
            pred_counter = 0
    
        
        pred_dict = {'date': date,  
                     'predictions':{'mail' : pred_mail, 
                                    'tel' : pred_tel, 
                                    'counter' : pred_counter
                                   }
                    }

        pred_arr.append(pred_dict)

    print(pred_arr)    
    
    return pred_arr


def load_predictions(file, delimiter=';'):
    pred_df = pd.read_csv(file, delimiter=delimiter)
    
    return pred_df



if __name__ == "__main__":
    get_predictions(2019,10)
    #pred = load_predictions('../predictions/rf1.csv')

