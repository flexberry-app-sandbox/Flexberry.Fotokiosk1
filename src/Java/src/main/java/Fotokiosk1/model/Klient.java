package Fotokiosk1.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Fotokiosk1.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISFotokiosk1Клиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "OtpravNaPochtu")
    @Convert("OtpravNaPochtu")
    @Column(name = "ОтправНаПочту", length = 16, unique = true, nullable = false)
    private UUID _otpravnapochtuid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "OtpravNaPochtu", insertable = false, updatable = false)
    private OtpravNaPochtu otpravnapochtu;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Oplata")
    @Convert("Oplata")
    @Column(name = "Оплата", length = 16, unique = true, nullable = false)
    private UUID _oplataid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Oplata", insertable = false, updatable = false)
    private Oplata oplata;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }


}