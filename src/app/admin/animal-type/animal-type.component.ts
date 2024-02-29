import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ExternalButtonModel } from 'src/app/_layout/_models/external-button-model';
import { AnimalType } from 'src/app/_models/animalType/animal-type';
import { PageResult } from 'src/app/_models/page-result';
import { AnimalTypeService } from 'src/app/_services/admin/animal-type.service';
import { SpinnerBaseComponent,SpinnerType,} from 'src/app/spinner-base/spinner-base.component';

@Component({
  selector: 'app-animal-type',
  templateUrl: './animal-type.component.html',
  styleUrls: ['./animal-type.component.css'],
})
export class AnimalTypeComponent
  extends SpinnerBaseComponent
  implements OnInit
{
  data: AnimalType = new AnimalType();

  constructor(
    spinner: NgxSpinnerService,
    private _service: AnimalTypeService,
    private _notificationService: ToastrService
  ) {
    super(spinner);
  }
  updatePopupVisible: boolean = false;
  addPopupVisible: boolean = false;
  itemPerPage = 5;
  currentPage = 1;
  pageResult: PageResult = new PageResult();
  updatedAnimalTypeId: any;
  columns: any[] = [
    { key: 'id', caption: 'Id' },
    { key: 'code', caption: 'Kod' },
    { key: 'name', caption: 'İsim' },
    { key: 'description', caption: 'Açıklama' },
  ];
  pagining: any = {
    page: 1,
    perPage: 5,
    sort: null,
    filter: null,
  };

  externalButtons: ExternalButtonModel[] = [
    {
      id: 'refresh',
      action: (pagining: any) => this.getData(pagining),
      text: 'Yeniden Yükle',
      styleCss: 'btn btn-info',
      order: 1,
      icon: 'fa fa-refresh',
    },
    {
      id: 'add',
      action: () => this.openPopup(),
      text: 'Ekle',
      styleCss: 'btn btn-success',
      order: 2,
      icon: 'fa fa-plus',
    },
    {
      id: 'update',
      action: (id: any) => this.openUpdatePopup(id),
      text: 'Düzenle',
      styleCss: 'btn btn-warning',
      order: 3,
      icon: 'fa fa-edit',
    },
    {
      id: 'delete',
      action: (animalTypeId: number) => this.deleteData(animalTypeId),
      text: 'Sil',
      styleCss: 'btn btn-danger',
      order: 4,
      icon: 'fa fa-trash',
    },
  ];

  ngOnInit() {
    this.getData(this.pagining);
  }

  deleteData(id: number) {
    this._service.deleteAnimalType(id).subscribe((res) => {
      if (res.statusCode == 200) {
        this.getData(this.pagining);
        this._notificationService.success(res.message)

      } else {
        //error basabiliriz..
      }
    },err=>{
      this._notificationService.error(err.message)

    });
  }
  getData(pagining: any) {
    this.pagining = pagining ?? this.pagining;
    this.showSpinner(SpinnerType.BallAtom);
    this._service.getAnimalTypes(this.pagining).subscribe((res) => {
      if (res.statusCode == 200) {
        this.pageResult.count = res.count;
        this.pageResult.data = res.data;
        this.pageResult.totalCount = res.totalCount;
        this.hideSpinner(SpinnerType.BallAtom);
      } else {
        //error basabiliriz..
        this._notificationService.error(res.message)
      }
    },err=>{
      console.log(err);
      this._notificationService.error(err.message)
      this.hideSpinner(SpinnerType.BallAtom)
    }
  );
  }

  displayStyle = 'none';
  displayStyleUpdate = 'none';
  openPopup() {
    this.displayStyle = 'block';
    this.addPopupVisible = true;
  }

  closePopup() {
    this.displayStyle = 'none';
    this.getData(this.pagining);
    this.addPopupVisible = false;
  }

  openUpdatePopup(animalTypeId: any) {
    this.displayStyleUpdate = 'block';
    if (animalTypeId) {
      this.updatePopupVisible = true;
      this.updatedAnimalTypeId = animalTypeId;
    } else {
      alert('animal type id cannot be null');
    }
  }

  closeUpdatePopup() {
    this.displayStyleUpdate = 'none';
    this.updatePopupVisible = false;
    this.getData(this.pagining);
  }
}
