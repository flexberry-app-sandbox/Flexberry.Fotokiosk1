﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Fotokiosk1
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Клиент.
    /// </summary>
    // *** Start programmer edit section *** (Клиент CustomAttributes)

    // *** End programmer edit section *** (Клиент CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("КлиентE", new string[] {
            "ID as \'ID\'",
            "ОтправНаПочту as \'Отправ на почту\'",
            "ОтправНаПочту.ФИО as \'ФИО\'",
            "Оплата as \'Оплата\'",
            "Оплата.Время as \'Время\'"}, Hidden=new string[] {
            "ОтправНаПочту.ФИО",
            "Оплата.Время"})]
    [MasterViewDefineAttribute("КлиентE", "ОтправНаПочту", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("КлиентE", "Оплата", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Время")]
    [View("КлиентL", new string[] {
            "ID as \'ID\'",
            "ОтправНаПочту.ФИО as \'ФИО\'",
            "Оплата.Время as \'Время\'"})]
    public class Клиент : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private IIS.Fotokiosk1.ОтправНаПочту fОтправНаПочту;
        
        private IIS.Fotokiosk1.Оплата fОплата;
        
        // *** Start programmer edit section *** (Клиент CustomMembers)

        // *** End programmer edit section *** (Клиент CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.ID CustomAttributes)

        // *** End programmer edit section *** (Клиент.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.ID Get start)

                // *** End programmer edit section *** (Клиент.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (Клиент.ID Get end)

                // *** End programmer edit section *** (Клиент.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.ID Set start)

                // *** End programmer edit section *** (Клиент.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (Клиент.ID Set end)

                // *** End programmer edit section *** (Клиент.ID Set end)
            }
        }
        
        /// <summary>
        /// Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.Оплата CustomAttributes)

        // *** End programmer edit section *** (Клиент.Оплата CustomAttributes)
        [PropertyStorage(new string[] {
                "Оплата"})]
        [NotNull()]
        public virtual IIS.Fotokiosk1.Оплата Оплата
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.Оплата Get start)

                // *** End programmer edit section *** (Клиент.Оплата Get start)
                IIS.Fotokiosk1.Оплата result = this.fОплата;
                // *** Start programmer edit section *** (Клиент.Оплата Get end)

                // *** End programmer edit section *** (Клиент.Оплата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.Оплата Set start)

                // *** End programmer edit section *** (Клиент.Оплата Set start)
                this.fОплата = value;
                // *** Start programmer edit section *** (Клиент.Оплата Set end)

                // *** End programmer edit section *** (Клиент.Оплата Set end)
            }
        }
        
        /// <summary>
        /// Клиент.
        /// </summary>
        // *** Start programmer edit section *** (Клиент.ОтправНаПочту CustomAttributes)

        // *** End programmer edit section *** (Клиент.ОтправНаПочту CustomAttributes)
        [PropertyStorage(new string[] {
                "ОтправНаПочту"})]
        [NotNull()]
        public virtual IIS.Fotokiosk1.ОтправНаПочту ОтправНаПочту
        {
            get
            {
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Get start)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Get start)
                IIS.Fotokiosk1.ОтправНаПочту result = this.fОтправНаПочту;
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Get end)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Set start)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Set start)
                this.fОтправНаПочту = value;
                // *** Start programmer edit section *** (Клиент.ОтправНаПочту Set end)

                // *** End programmer edit section *** (Клиент.ОтправНаПочту Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "КлиентE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентE", typeof(IIS.Fotokiosk1.Клиент));
                }
            }
            
            /// <summary>
            /// "КлиентL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View КлиентL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("КлиентL", typeof(IIS.Fotokiosk1.Клиент));
                }
            }
        }
    }
}
