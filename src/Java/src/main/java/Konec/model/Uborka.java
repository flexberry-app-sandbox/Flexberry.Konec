package Konec.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Konec.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Уборка
 */
@Entity(name = "IISKonecУборка")
@Table(schema = "public", name = "Уборка")
public class Uborka {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДеньУборки")
    private Date деньуборки;

    @Column(name = "ВремяУборки")
    private String времяуборки;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnost")
    @Convert("Dolzhnost")
    @Column(name = "Должность", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnost", insertable = false, updatable = false)
    private Dolzhnost dolzhnost;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Voler")
    @Convert("Voler")
    @Column(name = "Вольер", length = 16, unique = true, nullable = false)
    private UUID _volerid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Voler", insertable = false, updatable = false)
    private Voler voler;


    public Uborka() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДеньУборки() {
      return деньуборки;
    }

    public void setДеньУборки(Date деньуборки) {
      this.деньуборки = деньуборки;
    }

    public String getВремяУборки() {
      return времяуборки;
    }

    public void setВремяУборки(String времяуборки) {
      this.времяуборки = времяуборки;
    }


}