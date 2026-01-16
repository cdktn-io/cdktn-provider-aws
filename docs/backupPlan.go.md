# `backupPlan` Submodule <a name="`backupPlan` Submodule" id="@cdktn/provider-aws.backupPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BackupPlan <a name="BackupPlan" id="@cdktn/provider-aws.backupPlan.BackupPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan aws_backup_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlan(scope Construct, id *string, config BackupPlanConfig) BackupPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig">BackupPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.backupPlan.BackupPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.backupPlan.BackupPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.backupPlan.BackupPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig">BackupPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting">PutAdvancedBackupSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.putScanSetting">PutScanSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.resetAdvancedBackupSetting">ResetAdvancedBackupSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.resetScanSetting">ResetScanSetting</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.backupPlan.BackupPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.backupPlan.BackupPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.backupPlan.BackupPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.backupPlan.BackupPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.backupPlan.BackupPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.backupPlan.BackupPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.backupPlan.BackupPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.backupPlan.BackupPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.backupPlan.BackupPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.backupPlan.BackupPlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.backupPlan.BackupPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.backupPlan.BackupPlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.backupPlan.BackupPlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.backupPlan.BackupPlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.backupPlan.BackupPlan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.backupPlan.BackupPlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.backupPlan.BackupPlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.backupPlan.BackupPlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.backupPlan.BackupPlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.backupPlan.BackupPlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.backupPlan.BackupPlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.backupPlan.BackupPlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedBackupSetting` <a name="PutAdvancedBackupSetting" id="@cdktn/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting"></a>

```go
func PutAdvancedBackupSetting(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.backupPlan.BackupPlan.putAdvancedBackupSetting.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-aws.backupPlan.BackupPlan.putRule"></a>

```go
func PutRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.backupPlan.BackupPlan.putRule.parameter.value"></a>

- *Type:* interface{}

---

##### `PutScanSetting` <a name="PutScanSetting" id="@cdktn/provider-aws.backupPlan.BackupPlan.putScanSetting"></a>

```go
func PutScanSetting(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.backupPlan.BackupPlan.putScanSetting.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdvancedBackupSetting` <a name="ResetAdvancedBackupSetting" id="@cdktn/provider-aws.backupPlan.BackupPlan.resetAdvancedBackupSetting"></a>

```go
func ResetAdvancedBackupSetting()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.backupPlan.BackupPlan.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.backupPlan.BackupPlan.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetScanSetting` <a name="ResetScanSetting" id="@cdktn/provider-aws.backupPlan.BackupPlan.resetScanSetting"></a>

```go
func ResetScanSetting()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.backupPlan.BackupPlan.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.backupPlan.BackupPlan.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BackupPlan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.backupPlan.BackupPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.BackupPlan_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.backupPlan.BackupPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.backupPlan.BackupPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.BackupPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.backupPlan.BackupPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlan.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.BackupPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.backupPlan.BackupPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.backupPlan.BackupPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.BackupPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BackupPlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.backupPlan.BackupPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.backupPlan.BackupPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BackupPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.backupPlan.BackupPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BackupPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.backupPlan.BackupPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BackupPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting">AdvancedBackupSetting</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.scanSetting">ScanSetting</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList">BackupPlanScanSettingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput">AdvancedBackupSettingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.scanSettingInput">ScanSettingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdvancedBackupSetting`<sup>Required</sup> <a name="AdvancedBackupSetting" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.advancedBackupSetting"></a>

```go
func AdvancedBackupSetting() BackupPlanAdvancedBackupSettingList
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList">BackupPlanAdvancedBackupSettingList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.rule"></a>

```go
func Rule() BackupPlanRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList">BackupPlanRuleList</a>

---

##### `ScanSetting`<sup>Required</sup> <a name="ScanSetting" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.scanSetting"></a>

```go
func ScanSetting() BackupPlanScanSettingList
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList">BackupPlanScanSettingList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `AdvancedBackupSettingInput`<sup>Optional</sup> <a name="AdvancedBackupSettingInput" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.advancedBackupSettingInput"></a>

```go
func AdvancedBackupSettingInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `ScanSettingInput`<sup>Optional</sup> <a name="ScanSettingInput" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.scanSettingInput"></a>

```go
func ScanSettingInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.backupPlan.BackupPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BackupPlanAdvancedBackupSetting <a name="BackupPlanAdvancedBackupSetting" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanAdvancedBackupSetting {
	BackupOptions: *map[string]*string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions">BackupOptions</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#backup_options BackupPlan#backup_options}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#resource_type BackupPlan#resource_type}. |

---

##### `BackupOptions`<sup>Required</sup> <a name="BackupOptions" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.backupOptions"></a>

```go
BackupOptions *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#backup_options BackupPlan#backup_options}.

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSetting.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#resource_type BackupPlan#resource_type}.

---

### BackupPlanConfig <a name="BackupPlanConfig" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Rule: interface{},
	AdvancedBackupSetting: interface{},
	Id: *string,
	Region: *string,
	ScanSetting: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#name BackupPlan#name}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.rule">Rule</a></code> | <code>interface{}</code> | rule block. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting">AdvancedBackupSetting</a></code> | <code>interface{}</code> | advanced_backup_setting block. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#id BackupPlan#id}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.scanSetting">ScanSetting</a></code> | <code>interface{}</code> | scan_setting block. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#tags BackupPlan#tags}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#tags_all BackupPlan#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#name BackupPlan#name}.

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.rule"></a>

```go
Rule interface{}
```

- *Type:* interface{}

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#rule BackupPlan#rule}

---

##### `AdvancedBackupSetting`<sup>Optional</sup> <a name="AdvancedBackupSetting" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.advancedBackupSetting"></a>

```go
AdvancedBackupSetting interface{}
```

- *Type:* interface{}

advanced_backup_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#advanced_backup_setting BackupPlan#advanced_backup_setting}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#id BackupPlan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#region BackupPlan#region}

---

##### `ScanSetting`<sup>Optional</sup> <a name="ScanSetting" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.scanSetting"></a>

```go
ScanSetting interface{}
```

- *Type:* interface{}

scan_setting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#scan_setting BackupPlan#scan_setting}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#tags BackupPlan#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.backupPlan.BackupPlanConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#tags_all BackupPlan#tags_all}.

---

### BackupPlanRule <a name="BackupPlanRule" id="@cdktn/provider-aws.backupPlan.BackupPlanRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanRule {
	RuleName: *string,
	TargetVaultName: *string,
	CompletionWindow: *f64,
	CopyAction: interface{},
	EnableContinuousBackup: interface{},
	Lifecycle: github.com/cdktn-io/cdktn-provider-aws-go/aws.backupPlan.BackupPlanRuleLifecycle,
	RecoveryPointTags: *map[string]*string,
	ScanAction: interface{},
	Schedule: *string,
	ScheduleExpressionTimezone: *string,
	StartWindow: *f64,
	TargetLogicallyAirGappedBackupVaultArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.ruleName">RuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#rule_name BackupPlan#rule_name}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName">TargetVaultName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#target_vault_name BackupPlan#target_vault_name}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.completionWindow">CompletionWindow</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#completion_window BackupPlan#completion_window}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.copyAction">CopyAction</a></code> | <code>interface{}</code> | copy_action block. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | lifecycle block. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.scanAction">ScanAction</a></code> | <code>interface{}</code> | scan_action block. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.schedule">Schedule</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#schedule BackupPlan#schedule}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#schedule_expression_timezone BackupPlan#schedule_expression_timezone}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.startWindow">StartWindow</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#start_window BackupPlan#start_window}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn">TargetLogicallyAirGappedBackupVaultArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#target_logically_air_gapped_backup_vault_arn BackupPlan#target_logically_air_gapped_backup_vault_arn}. |

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#rule_name BackupPlan#rule_name}.

---

##### `TargetVaultName`<sup>Required</sup> <a name="TargetVaultName" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.targetVaultName"></a>

```go
TargetVaultName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#target_vault_name BackupPlan#target_vault_name}.

---

##### `CompletionWindow`<sup>Optional</sup> <a name="CompletionWindow" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.completionWindow"></a>

```go
CompletionWindow *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#completion_window BackupPlan#completion_window}.

---

##### `CopyAction`<sup>Optional</sup> <a name="CopyAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.copyAction"></a>

```go
CopyAction interface{}
```

- *Type:* interface{}

copy_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#copy_action BackupPlan#copy_action}

---

##### `EnableContinuousBackup`<sup>Optional</sup> <a name="EnableContinuousBackup" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.enableContinuousBackup"></a>

```go
EnableContinuousBackup interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#enable_continuous_backup BackupPlan#enable_continuous_backup}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.lifecycle"></a>

```go
Lifecycle BackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#lifecycle BackupPlan#lifecycle}

---

##### `RecoveryPointTags`<sup>Optional</sup> <a name="RecoveryPointTags" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.recoveryPointTags"></a>

```go
RecoveryPointTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#recovery_point_tags BackupPlan#recovery_point_tags}.

---

##### `ScanAction`<sup>Optional</sup> <a name="ScanAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.scanAction"></a>

```go
ScanAction interface{}
```

- *Type:* interface{}

scan_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#scan_action BackupPlan#scan_action}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#schedule BackupPlan#schedule}.

---

##### `ScheduleExpressionTimezone`<sup>Optional</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.scheduleExpressionTimezone"></a>

```go
ScheduleExpressionTimezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#schedule_expression_timezone BackupPlan#schedule_expression_timezone}.

---

##### `StartWindow`<sup>Optional</sup> <a name="StartWindow" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.startWindow"></a>

```go
StartWindow *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#start_window BackupPlan#start_window}.

---

##### `TargetLogicallyAirGappedBackupVaultArn`<sup>Optional</sup> <a name="TargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-aws.backupPlan.BackupPlanRule.property.targetLogicallyAirGappedBackupVaultArn"></a>

```go
TargetLogicallyAirGappedBackupVaultArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#target_logically_air_gapped_backup_vault_arn BackupPlan#target_logically_air_gapped_backup_vault_arn}.

---

### BackupPlanRuleCopyAction <a name="BackupPlanRuleCopyAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanRuleCopyAction {
	DestinationVaultArn: *string,
	Lifecycle: github.com/cdktn-io/cdktn-provider-aws-go/aws.backupPlan.BackupPlanRuleCopyActionLifecycle,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn">DestinationVaultArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | lifecycle block. |

---

##### `DestinationVaultArn`<sup>Required</sup> <a name="DestinationVaultArn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.destinationVaultArn"></a>

```go
DestinationVaultArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#destination_vault_arn BackupPlan#destination_vault_arn}.

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyAction.property.lifecycle"></a>

```go
Lifecycle BackupPlanRuleCopyActionLifecycle
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

lifecycle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#lifecycle BackupPlan#lifecycle}

---

### BackupPlanRuleCopyActionLifecycle <a name="BackupPlanRuleCopyActionLifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanRuleCopyActionLifecycle {
	ColdStorageAfter: *f64,
	DeleteAfter: *f64,
	OptInToArchiveForSupportedResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#delete_after BackupPlan#delete_after}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#opt_in_to_archive_for_supported_resources BackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `ColdStorageAfter`<sup>Optional</sup> <a name="ColdStorageAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.coldStorageAfter"></a>

```go
ColdStorageAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `DeleteAfter`<sup>Optional</sup> <a name="DeleteAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.deleteAfter"></a>

```go
DeleteAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#delete_after BackupPlan#delete_after}.

---

##### `OptInToArchiveForSupportedResources`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle.property.optInToArchiveForSupportedResources"></a>

```go
OptInToArchiveForSupportedResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#opt_in_to_archive_for_supported_resources BackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupPlanRuleLifecycle <a name="BackupPlanRuleLifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanRuleLifecycle {
	ColdStorageAfter: *f64,
	DeleteAfter: *f64,
	OptInToArchiveForSupportedResources: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#cold_storage_after BackupPlan#cold_storage_after}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#delete_after BackupPlan#delete_after}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#opt_in_to_archive_for_supported_resources BackupPlan#opt_in_to_archive_for_supported_resources}. |

---

##### `ColdStorageAfter`<sup>Optional</sup> <a name="ColdStorageAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.coldStorageAfter"></a>

```go
ColdStorageAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#cold_storage_after BackupPlan#cold_storage_after}.

---

##### `DeleteAfter`<sup>Optional</sup> <a name="DeleteAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.deleteAfter"></a>

```go
DeleteAfter *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#delete_after BackupPlan#delete_after}.

---

##### `OptInToArchiveForSupportedResources`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle.property.optInToArchiveForSupportedResources"></a>

```go
OptInToArchiveForSupportedResources interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#opt_in_to_archive_for_supported_resources BackupPlan#opt_in_to_archive_for_supported_resources}.

---

### BackupPlanRuleScanAction <a name="BackupPlanRuleScanAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanAction.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanRuleScanAction {
	MalwareScanner: *string,
	ScanMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanAction.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#malware_scanner BackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanAction.property.scanMode">ScanMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#scan_mode BackupPlan#scan_mode}. |

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanAction.property.malwareScanner"></a>

```go
MalwareScanner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#malware_scanner BackupPlan#malware_scanner}.

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanAction.property.scanMode"></a>

```go
ScanMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#scan_mode BackupPlan#scan_mode}.

---

### BackupPlanScanSetting <a name="BackupPlanScanSetting" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSetting"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSetting.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

&backupplan.BackupPlanScanSetting {
	MalwareScanner: *string,
	ResourceTypes: *[]*string,
	ScannerRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSetting.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#malware_scanner BackupPlan#malware_scanner}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSetting.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#resource_types BackupPlan#resource_types}. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSetting.property.scannerRoleArn">ScannerRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#scanner_role_arn BackupPlan#scanner_role_arn}. |

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSetting.property.malwareScanner"></a>

```go
MalwareScanner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#malware_scanner BackupPlan#malware_scanner}.

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSetting.property.resourceTypes"></a>

```go
ResourceTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#resource_types BackupPlan#resource_types}.

---

##### `ScannerRoleArn`<sup>Required</sup> <a name="ScannerRoleArn" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSetting.property.scannerRoleArn"></a>

```go
ScannerRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/backup_plan#scanner_role_arn BackupPlan#scanner_role_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### BackupPlanAdvancedBackupSettingList <a name="BackupPlanAdvancedBackupSettingList" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanAdvancedBackupSettingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupPlanAdvancedBackupSettingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get"></a>

```go
func Get(index *f64) BackupPlanAdvancedBackupSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanAdvancedBackupSettingOutputReference <a name="BackupPlanAdvancedBackupSettingOutputReference" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanAdvancedBackupSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupPlanAdvancedBackupSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput">BackupOptionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions">BackupOptions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupOptionsInput`<sup>Optional</sup> <a name="BackupOptionsInput" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptionsInput"></a>

```go
func BackupOptionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `BackupOptions`<sup>Required</sup> <a name="BackupOptions" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.backupOptions"></a>

```go
func BackupOptions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanAdvancedBackupSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleCopyActionLifecycleOutputReference <a name="BackupPlanRuleCopyActionLifecycleOutputReference" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleCopyActionLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPlanRuleCopyActionLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetColdStorageAfter">ResetColdStorageAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetDeleteAfter">ResetDeleteAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetOptInToArchiveForSupportedResources">ResetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColdStorageAfter` <a name="ResetColdStorageAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetColdStorageAfter"></a>

```go
func ResetColdStorageAfter()
```

##### `ResetDeleteAfter` <a name="ResetDeleteAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetDeleteAfter"></a>

```go
func ResetDeleteAfter()
```

##### `ResetOptInToArchiveForSupportedResources` <a name="ResetOptInToArchiveForSupportedResources" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```go
func ResetOptInToArchiveForSupportedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput">ColdStorageAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput">DeleteAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">OptInToArchiveForSupportedResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColdStorageAfterInput`<sup>Optional</sup> <a name="ColdStorageAfterInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfterInput"></a>

```go
func ColdStorageAfterInput() *f64
```

- *Type:* *f64

---

##### `DeleteAfterInput`<sup>Optional</sup> <a name="DeleteAfterInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfterInput"></a>

```go
func DeleteAfterInput() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResourcesInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```go
func OptInToArchiveForSupportedResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `ColdStorageAfter`<sup>Required</sup> <a name="ColdStorageAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.coldStorageAfter"></a>

```go
func ColdStorageAfter() *f64
```

- *Type:* *f64

---

##### `DeleteAfter`<sup>Required</sup> <a name="DeleteAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.deleteAfter"></a>

```go
func DeleteAfter() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```go
func OptInToArchiveForSupportedResources() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPlanRuleCopyActionLifecycle
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---


### BackupPlanRuleCopyActionList <a name="BackupPlanRuleCopyActionList" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleCopyActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupPlanRuleCopyActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get"></a>

```go
func Get(index *f64) BackupPlanRuleCopyActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleCopyActionOutputReference <a name="BackupPlanRuleCopyActionOutputReference" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleCopyActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupPlanRuleCopyActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle">PutLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resetLifecycle">ResetLifecycle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle"></a>

```go
func PutLifecycle(value BackupPlanRuleCopyActionLifecycle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.resetLifecycle"></a>

```go
func ResetLifecycle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput">DestinationVaultArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn">DestinationVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycle"></a>

```go
func Lifecycle() BackupPlanRuleCopyActionLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycleOutputReference">BackupPlanRuleCopyActionLifecycleOutputReference</a>

---

##### `DestinationVaultArnInput`<sup>Optional</sup> <a name="DestinationVaultArnInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArnInput"></a>

```go
func DestinationVaultArnInput() *string
```

- *Type:* *string

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.lifecycleInput"></a>

```go
func LifecycleInput() BackupPlanRuleCopyActionLifecycle
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionLifecycle">BackupPlanRuleCopyActionLifecycle</a>

---

##### `DestinationVaultArn`<sup>Required</sup> <a name="DestinationVaultArn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.destinationVaultArn"></a>

```go
func DestinationVaultArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleLifecycleOutputReference <a name="BackupPlanRuleLifecycleOutputReference" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleLifecycleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BackupPlanRuleLifecycleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetColdStorageAfter">ResetColdStorageAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetDeleteAfter">ResetDeleteAfter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources">ResetOptInToArchiveForSupportedResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColdStorageAfter` <a name="ResetColdStorageAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetColdStorageAfter"></a>

```go
func ResetColdStorageAfter()
```

##### `ResetDeleteAfter` <a name="ResetDeleteAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetDeleteAfter"></a>

```go
func ResetDeleteAfter()
```

##### `ResetOptInToArchiveForSupportedResources` <a name="ResetOptInToArchiveForSupportedResources" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.resetOptInToArchiveForSupportedResources"></a>

```go
func ResetOptInToArchiveForSupportedResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput">ColdStorageAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput">DeleteAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput">OptInToArchiveForSupportedResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter">ColdStorageAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter">DeleteAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources">OptInToArchiveForSupportedResources</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColdStorageAfterInput`<sup>Optional</sup> <a name="ColdStorageAfterInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfterInput"></a>

```go
func ColdStorageAfterInput() *f64
```

- *Type:* *f64

---

##### `DeleteAfterInput`<sup>Optional</sup> <a name="DeleteAfterInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfterInput"></a>

```go
func DeleteAfterInput() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResourcesInput`<sup>Optional</sup> <a name="OptInToArchiveForSupportedResourcesInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResourcesInput"></a>

```go
func OptInToArchiveForSupportedResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `ColdStorageAfter`<sup>Required</sup> <a name="ColdStorageAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.coldStorageAfter"></a>

```go
func ColdStorageAfter() *f64
```

- *Type:* *f64

---

##### `DeleteAfter`<sup>Required</sup> <a name="DeleteAfter" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.deleteAfter"></a>

```go
func DeleteAfter() *f64
```

- *Type:* *f64

---

##### `OptInToArchiveForSupportedResources`<sup>Required</sup> <a name="OptInToArchiveForSupportedResources" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.optInToArchiveForSupportedResources"></a>

```go
func OptInToArchiveForSupportedResources() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference.property.internalValue"></a>

```go
func InternalValue() BackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---


### BackupPlanRuleList <a name="BackupPlanRuleList" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupPlanRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.get"></a>

```go
func Get(index *f64) BackupPlanRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleOutputReference <a name="BackupPlanRuleOutputReference" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupPlanRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction">PutCopyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle">PutLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.putScanAction">PutScanAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCompletionWindow">ResetCompletionWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCopyAction">ResetCopyAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetEnableContinuousBackup">ResetEnableContinuousBackup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetLifecycle">ResetLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetRecoveryPointTags">ResetRecoveryPointTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetScanAction">ResetScanAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetScheduleExpressionTimezone">ResetScheduleExpressionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetStartWindow">ResetStartWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn">ResetTargetLogicallyAirGappedBackupVaultArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCopyAction` <a name="PutCopyAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction"></a>

```go
func PutCopyAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.putCopyAction.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLifecycle` <a name="PutLifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle"></a>

```go
func PutLifecycle(value BackupPlanRuleLifecycle)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.putLifecycle.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `PutScanAction` <a name="PutScanAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.putScanAction"></a>

```go
func PutScanAction(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.putScanAction.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompletionWindow` <a name="ResetCompletionWindow" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCompletionWindow"></a>

```go
func ResetCompletionWindow()
```

##### `ResetCopyAction` <a name="ResetCopyAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetCopyAction"></a>

```go
func ResetCopyAction()
```

##### `ResetEnableContinuousBackup` <a name="ResetEnableContinuousBackup" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetEnableContinuousBackup"></a>

```go
func ResetEnableContinuousBackup()
```

##### `ResetLifecycle` <a name="ResetLifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetLifecycle"></a>

```go
func ResetLifecycle()
```

##### `ResetRecoveryPointTags` <a name="ResetRecoveryPointTags" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetRecoveryPointTags"></a>

```go
func ResetRecoveryPointTags()
```

##### `ResetScanAction` <a name="ResetScanAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetScanAction"></a>

```go
func ResetScanAction()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```

##### `ResetScheduleExpressionTimezone` <a name="ResetScheduleExpressionTimezone" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetScheduleExpressionTimezone"></a>

```go
func ResetScheduleExpressionTimezone()
```

##### `ResetStartWindow` <a name="ResetStartWindow" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetStartWindow"></a>

```go
func ResetStartWindow()
```

##### `ResetTargetLogicallyAirGappedBackupVaultArn` <a name="ResetTargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.resetTargetLogicallyAirGappedBackupVaultArn"></a>

```go
func ResetTargetLogicallyAirGappedBackupVaultArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction">CopyAction</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle">Lifecycle</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scanAction">ScanAction</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList">BackupPlanRuleScanActionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput">CompletionWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput">CopyActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput">EnableContinuousBackupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput">LifecycleInput</a></code> | <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput">RecoveryPointTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scanActionInput">ScanActionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput">ScheduleExpressionTimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput">StartWindowInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput">TargetLogicallyAirGappedBackupVaultArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput">TargetVaultNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow">CompletionWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup">EnableContinuousBackup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags">RecoveryPointTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleExpressionTimezone">ScheduleExpressionTimezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow">StartWindow</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn">TargetLogicallyAirGappedBackupVaultArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName">TargetVaultName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CopyAction`<sup>Required</sup> <a name="CopyAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyAction"></a>

```go
func CopyAction() BackupPlanRuleCopyActionList
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleCopyActionList">BackupPlanRuleCopyActionList</a>

---

##### `Lifecycle`<sup>Required</sup> <a name="Lifecycle" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycle"></a>

```go
func Lifecycle() BackupPlanRuleLifecycleOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycleOutputReference">BackupPlanRuleLifecycleOutputReference</a>

---

##### `ScanAction`<sup>Required</sup> <a name="ScanAction" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scanAction"></a>

```go
func ScanAction() BackupPlanRuleScanActionList
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList">BackupPlanRuleScanActionList</a>

---

##### `CompletionWindowInput`<sup>Optional</sup> <a name="CompletionWindowInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindowInput"></a>

```go
func CompletionWindowInput() *f64
```

- *Type:* *f64

---

##### `CopyActionInput`<sup>Optional</sup> <a name="CopyActionInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.copyActionInput"></a>

```go
func CopyActionInput() interface{}
```

- *Type:* interface{}

---

##### `EnableContinuousBackupInput`<sup>Optional</sup> <a name="EnableContinuousBackupInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackupInput"></a>

```go
func EnableContinuousBackupInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleInput`<sup>Optional</sup> <a name="LifecycleInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.lifecycleInput"></a>

```go
func LifecycleInput() BackupPlanRuleLifecycle
```

- *Type:* <a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleLifecycle">BackupPlanRuleLifecycle</a>

---

##### `RecoveryPointTagsInput`<sup>Optional</sup> <a name="RecoveryPointTagsInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTagsInput"></a>

```go
func RecoveryPointTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `ScanActionInput`<sup>Optional</sup> <a name="ScanActionInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scanActionInput"></a>

```go
func ScanActionInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleExpressionTimezoneInput`<sup>Optional</sup> <a name="ScheduleExpressionTimezoneInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleExpressionTimezoneInput"></a>

```go
func ScheduleExpressionTimezoneInput() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `StartWindowInput`<sup>Optional</sup> <a name="StartWindowInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindowInput"></a>

```go
func StartWindowInput() *f64
```

- *Type:* *f64

---

##### `TargetLogicallyAirGappedBackupVaultArnInput`<sup>Optional</sup> <a name="TargetLogicallyAirGappedBackupVaultArnInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArnInput"></a>

```go
func TargetLogicallyAirGappedBackupVaultArnInput() *string
```

- *Type:* *string

---

##### `TargetVaultNameInput`<sup>Optional</sup> <a name="TargetVaultNameInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultNameInput"></a>

```go
func TargetVaultNameInput() *string
```

- *Type:* *string

---

##### `CompletionWindow`<sup>Required</sup> <a name="CompletionWindow" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.completionWindow"></a>

```go
func CompletionWindow() *f64
```

- *Type:* *f64

---

##### `EnableContinuousBackup`<sup>Required</sup> <a name="EnableContinuousBackup" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.enableContinuousBackup"></a>

```go
func EnableContinuousBackup() interface{}
```

- *Type:* interface{}

---

##### `RecoveryPointTags`<sup>Required</sup> <a name="RecoveryPointTags" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.recoveryPointTags"></a>

```go
func RecoveryPointTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `ScheduleExpressionTimezone`<sup>Required</sup> <a name="ScheduleExpressionTimezone" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.scheduleExpressionTimezone"></a>

```go
func ScheduleExpressionTimezone() *string
```

- *Type:* *string

---

##### `StartWindow`<sup>Required</sup> <a name="StartWindow" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.startWindow"></a>

```go
func StartWindow() *f64
```

- *Type:* *f64

---

##### `TargetLogicallyAirGappedBackupVaultArn`<sup>Required</sup> <a name="TargetLogicallyAirGappedBackupVaultArn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetLogicallyAirGappedBackupVaultArn"></a>

```go
func TargetLogicallyAirGappedBackupVaultArn() *string
```

- *Type:* *string

---

##### `TargetVaultName`<sup>Required</sup> <a name="TargetVaultName" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.targetVaultName"></a>

```go
func TargetVaultName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleScanActionList <a name="BackupPlanRuleScanActionList" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleScanActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupPlanRuleScanActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.get"></a>

```go
func Get(index *f64) BackupPlanRuleScanActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanRuleScanActionOutputReference <a name="BackupPlanRuleScanActionOutputReference" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanRuleScanActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupPlanRuleScanActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.malwareScannerInput">MalwareScannerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.scanModeInput">ScanModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.scanMode">ScanMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MalwareScannerInput`<sup>Optional</sup> <a name="MalwareScannerInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.malwareScannerInput"></a>

```go
func MalwareScannerInput() *string
```

- *Type:* *string

---

##### `ScanModeInput`<sup>Optional</sup> <a name="ScanModeInput" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.scanModeInput"></a>

```go
func ScanModeInput() *string
```

- *Type:* *string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.malwareScanner"></a>

```go
func MalwareScanner() *string
```

- *Type:* *string

---

##### `ScanMode`<sup>Required</sup> <a name="ScanMode" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.scanMode"></a>

```go
func ScanMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanRuleScanActionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanScanSettingList <a name="BackupPlanScanSettingList" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanScanSettingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BackupPlanScanSettingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.get"></a>

```go
func Get(index *f64) BackupPlanScanSettingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BackupPlanScanSettingOutputReference <a name="BackupPlanScanSettingOutputReference" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/backupplan"

backupplan.NewBackupPlanScanSettingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BackupPlanScanSettingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.malwareScannerInput">MalwareScannerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.resourceTypesInput">ResourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.scannerRoleArnInput">ScannerRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.malwareScanner">MalwareScanner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.resourceTypes">ResourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.scannerRoleArn">ScannerRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MalwareScannerInput`<sup>Optional</sup> <a name="MalwareScannerInput" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.malwareScannerInput"></a>

```go
func MalwareScannerInput() *string
```

- *Type:* *string

---

##### `ResourceTypesInput`<sup>Optional</sup> <a name="ResourceTypesInput" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.resourceTypesInput"></a>

```go
func ResourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScannerRoleArnInput`<sup>Optional</sup> <a name="ScannerRoleArnInput" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.scannerRoleArnInput"></a>

```go
func ScannerRoleArnInput() *string
```

- *Type:* *string

---

##### `MalwareScanner`<sup>Required</sup> <a name="MalwareScanner" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.malwareScanner"></a>

```go
func MalwareScanner() *string
```

- *Type:* *string

---

##### `ResourceTypes`<sup>Required</sup> <a name="ResourceTypes" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.resourceTypes"></a>

```go
func ResourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ScannerRoleArn`<sup>Required</sup> <a name="ScannerRoleArn" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.scannerRoleArn"></a>

```go
func ScannerRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.backupPlan.BackupPlanScanSettingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



