# `lightsailDatabase` Submodule <a name="`lightsailDatabase` Submodule" id="@cdktn/provider-aws.lightsailDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDatabase <a name="LightsailDatabase" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database aws_lightsail_database}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lightsaildatabase"

lightsaildatabase.NewLightsailDatabase(scope Construct, id *string, config LightsailDatabaseConfig) LightsailDatabase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig">LightsailDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig">LightsailDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetApplyImmediately">ResetApplyImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetAvailabilityZone">ResetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetBackupRetentionEnabled">ResetBackupRetentionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetFinalSnapshotName">ResetFinalSnapshotName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow">ResetPreferredBackupWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow">ResetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible">ResetPubliclyAccessible</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetSkipFinalSnapshot">ResetSkipFinalSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetApplyImmediately` <a name="ResetApplyImmediately" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetApplyImmediately"></a>

```go
func ResetApplyImmediately()
```

##### `ResetAvailabilityZone` <a name="ResetAvailabilityZone" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetAvailabilityZone"></a>

```go
func ResetAvailabilityZone()
```

##### `ResetBackupRetentionEnabled` <a name="ResetBackupRetentionEnabled" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetBackupRetentionEnabled"></a>

```go
func ResetBackupRetentionEnabled()
```

##### `ResetFinalSnapshotName` <a name="ResetFinalSnapshotName" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetFinalSnapshotName"></a>

```go
func ResetFinalSnapshotName()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetId"></a>

```go
func ResetId()
```

##### `ResetPreferredBackupWindow` <a name="ResetPreferredBackupWindow" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredBackupWindow"></a>

```go
func ResetPreferredBackupWindow()
```

##### `ResetPreferredMaintenanceWindow` <a name="ResetPreferredMaintenanceWindow" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetPreferredMaintenanceWindow"></a>

```go
func ResetPreferredMaintenanceWindow()
```

##### `ResetPubliclyAccessible` <a name="ResetPubliclyAccessible" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetPubliclyAccessible"></a>

```go
func ResetPubliclyAccessible()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSkipFinalSnapshot` <a name="ResetSkipFinalSnapshot" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetSkipFinalSnapshot"></a>

```go
func ResetSkipFinalSnapshot()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.resetTagsAll"></a>

```go
func ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LightsailDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lightsaildatabase"

lightsaildatabase.LightsailDatabase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lightsaildatabase"

lightsaildatabase.LightsailDatabase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lightsaildatabase"

lightsaildatabase.LightsailDatabase_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lightsaildatabase"

lightsaildatabase.LightsailDatabase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LightsailDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LightsailDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LightsailDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LightsailDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier">CaCertificateIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.cpuCount">CpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.diskSize">DiskSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointAddress">MasterEndpointAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointPort">MasterEndpointPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.ramSize">RamSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.secondaryAvailabilityZone">SecondaryAvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.supportCode">SupportCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediatelyInput">ApplyImmediatelyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput">AvailabilityZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabledInput">BackupRetentionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintIdInput">BlueprintIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleIdInput">BundleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotNameInput">FinalSnapshotNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput">MasterDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPasswordInput">MasterPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsernameInput">MasterUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput">PreferredBackupWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput">PreferredMaintenanceWindowInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput">PubliclyAccessibleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput">RelationalDatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshotInput">SkipFinalSnapshotInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabled">BackupRetentionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintId">BlueprintId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseName">MasterDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPassword">MasterPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName">RelationalDatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CaCertificateIdentifier`<sup>Required</sup> <a name="CaCertificateIdentifier" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.caCertificateIdentifier"></a>

```go
func CaCertificateIdentifier() *string
```

- *Type:* *string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.cpuCount"></a>

```go
func CpuCount() *f64
```

- *Type:* *f64

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `DiskSize`<sup>Required</sup> <a name="DiskSize" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.diskSize"></a>

```go
func DiskSize() *f64
```

- *Type:* *f64

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `MasterEndpointAddress`<sup>Required</sup> <a name="MasterEndpointAddress" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointAddress"></a>

```go
func MasterEndpointAddress() *string
```

- *Type:* *string

---

##### `MasterEndpointPort`<sup>Required</sup> <a name="MasterEndpointPort" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterEndpointPort"></a>

```go
func MasterEndpointPort() *f64
```

- *Type:* *f64

---

##### `RamSize`<sup>Required</sup> <a name="RamSize" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.ramSize"></a>

```go
func RamSize() *f64
```

- *Type:* *f64

---

##### `SecondaryAvailabilityZone`<sup>Required</sup> <a name="SecondaryAvailabilityZone" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.secondaryAvailabilityZone"></a>

```go
func SecondaryAvailabilityZone() *string
```

- *Type:* *string

---

##### `SupportCode`<sup>Required</sup> <a name="SupportCode" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.supportCode"></a>

```go
func SupportCode() *string
```

- *Type:* *string

---

##### `ApplyImmediatelyInput`<sup>Optional</sup> <a name="ApplyImmediatelyInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediatelyInput"></a>

```go
func ApplyImmediatelyInput() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZoneInput`<sup>Optional</sup> <a name="AvailabilityZoneInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZoneInput"></a>

```go
func AvailabilityZoneInput() *string
```

- *Type:* *string

---

##### `BackupRetentionEnabledInput`<sup>Optional</sup> <a name="BackupRetentionEnabledInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabledInput"></a>

```go
func BackupRetentionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `BlueprintIdInput`<sup>Optional</sup> <a name="BlueprintIdInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintIdInput"></a>

```go
func BlueprintIdInput() *string
```

- *Type:* *string

---

##### `BundleIdInput`<sup>Optional</sup> <a name="BundleIdInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleIdInput"></a>

```go
func BundleIdInput() *string
```

- *Type:* *string

---

##### `FinalSnapshotNameInput`<sup>Optional</sup> <a name="FinalSnapshotNameInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotNameInput"></a>

```go
func FinalSnapshotNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MasterDatabaseNameInput`<sup>Optional</sup> <a name="MasterDatabaseNameInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseNameInput"></a>

```go
func MasterDatabaseNameInput() *string
```

- *Type:* *string

---

##### `MasterPasswordInput`<sup>Optional</sup> <a name="MasterPasswordInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPasswordInput"></a>

```go
func MasterPasswordInput() *string
```

- *Type:* *string

---

##### `MasterUsernameInput`<sup>Optional</sup> <a name="MasterUsernameInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsernameInput"></a>

```go
func MasterUsernameInput() *string
```

- *Type:* *string

---

##### `PreferredBackupWindowInput`<sup>Optional</sup> <a name="PreferredBackupWindowInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindowInput"></a>

```go
func PreferredBackupWindowInput() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindowInput`<sup>Optional</sup> <a name="PreferredMaintenanceWindowInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindowInput"></a>

```go
func PreferredMaintenanceWindowInput() *string
```

- *Type:* *string

---

##### `PubliclyAccessibleInput`<sup>Optional</sup> <a name="PubliclyAccessibleInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessibleInput"></a>

```go
func PubliclyAccessibleInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RelationalDatabaseNameInput`<sup>Optional</sup> <a name="RelationalDatabaseNameInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseNameInput"></a>

```go
func RelationalDatabaseNameInput() *string
```

- *Type:* *string

---

##### `SkipFinalSnapshotInput`<sup>Optional</sup> <a name="SkipFinalSnapshotInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshotInput"></a>

```go
func SkipFinalSnapshotInput() interface{}
```

- *Type:* interface{}

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `ApplyImmediately`<sup>Required</sup> <a name="ApplyImmediately" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.applyImmediately"></a>

```go
func ApplyImmediately() interface{}
```

- *Type:* interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `BackupRetentionEnabled`<sup>Required</sup> <a name="BackupRetentionEnabled" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.backupRetentionEnabled"></a>

```go
func BackupRetentionEnabled() interface{}
```

- *Type:* interface{}

---

##### `BlueprintId`<sup>Required</sup> <a name="BlueprintId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.blueprintId"></a>

```go
func BlueprintId() *string
```

- *Type:* *string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `FinalSnapshotName`<sup>Required</sup> <a name="FinalSnapshotName" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.finalSnapshotName"></a>

```go
func FinalSnapshotName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MasterDatabaseName`<sup>Required</sup> <a name="MasterDatabaseName" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterDatabaseName"></a>

```go
func MasterDatabaseName() *string
```

- *Type:* *string

---

##### `MasterPassword`<sup>Required</sup> <a name="MasterPassword" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterPassword"></a>

```go
func MasterPassword() *string
```

- *Type:* *string

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.masterUsername"></a>

```go
func MasterUsername() *string
```

- *Type:* *string

---

##### `PreferredBackupWindow`<sup>Required</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredBackupWindow"></a>

```go
func PreferredBackupWindow() *string
```

- *Type:* *string

---

##### `PreferredMaintenanceWindow`<sup>Required</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.preferredMaintenanceWindow"></a>

```go
func PreferredMaintenanceWindow() *string
```

- *Type:* *string

---

##### `PubliclyAccessible`<sup>Required</sup> <a name="PubliclyAccessible" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.publiclyAccessible"></a>

```go
func PubliclyAccessible() interface{}
```

- *Type:* interface{}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RelationalDatabaseName`<sup>Required</sup> <a name="RelationalDatabaseName" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.relationalDatabaseName"></a>

```go
func RelationalDatabaseName() *string
```

- *Type:* *string

---

##### `SkipFinalSnapshot`<sup>Required</sup> <a name="SkipFinalSnapshot" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.skipFinalSnapshot"></a>

```go
func SkipFinalSnapshot() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDatabaseConfig <a name="LightsailDatabaseConfig" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/lightsaildatabase"

&lightsaildatabase.LightsailDatabaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BlueprintId: *string,
	BundleId: *string,
	MasterDatabaseName: *string,
	MasterPassword: *string,
	MasterUsername: *string,
	RelationalDatabaseName: *string,
	ApplyImmediately: interface{},
	AvailabilityZone: *string,
	BackupRetentionEnabled: interface{},
	FinalSnapshotName: *string,
	Id: *string,
	PreferredBackupWindow: *string,
	PreferredMaintenanceWindow: *string,
	PubliclyAccessible: interface{},
	Region: *string,
	SkipFinalSnapshot: interface{},
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.blueprintId">BlueprintId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#blueprint_id LightsailDatabase#blueprint_id}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.bundleId">BundleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#bundle_id LightsailDatabase#bundle_id}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName">MasterDatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterPassword">MasterPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#master_password LightsailDatabase#master_password}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername">MasterUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName">RelationalDatabaseName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.applyImmediately">ApplyImmediately</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#apply_immediately LightsailDatabase#apply_immediately}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.backupRetentionEnabled">BackupRetentionEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#backup_retention_enabled LightsailDatabase#backup_retention_enabled}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.finalSnapshotName">FinalSnapshotName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#final_snapshot_name LightsailDatabase#final_snapshot_name}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#id LightsailDatabase#id}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow">PreferredBackupWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow">PreferredMaintenanceWindow</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible">PubliclyAccessible</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.skipFinalSnapshot">SkipFinalSnapshot</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#skip_final_snapshot LightsailDatabase#skip_final_snapshot}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}. |
| <code><a href="#@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#tags_all LightsailDatabase#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlueprintId`<sup>Required</sup> <a name="BlueprintId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.blueprintId"></a>

```go
BlueprintId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#blueprint_id LightsailDatabase#blueprint_id}.

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.bundleId"></a>

```go
BundleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#bundle_id LightsailDatabase#bundle_id}.

---

##### `MasterDatabaseName`<sup>Required</sup> <a name="MasterDatabaseName" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterDatabaseName"></a>

```go
MasterDatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#master_database_name LightsailDatabase#master_database_name}.

---

##### `MasterPassword`<sup>Required</sup> <a name="MasterPassword" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterPassword"></a>

```go
MasterPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#master_password LightsailDatabase#master_password}.

---

##### `MasterUsername`<sup>Required</sup> <a name="MasterUsername" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.masterUsername"></a>

```go
MasterUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#master_username LightsailDatabase#master_username}.

---

##### `RelationalDatabaseName`<sup>Required</sup> <a name="RelationalDatabaseName" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.relationalDatabaseName"></a>

```go
RelationalDatabaseName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#relational_database_name LightsailDatabase#relational_database_name}.

---

##### `ApplyImmediately`<sup>Optional</sup> <a name="ApplyImmediately" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.applyImmediately"></a>

```go
ApplyImmediately interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#apply_immediately LightsailDatabase#apply_immediately}.

---

##### `AvailabilityZone`<sup>Optional</sup> <a name="AvailabilityZone" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.availabilityZone"></a>

```go
AvailabilityZone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#availability_zone LightsailDatabase#availability_zone}.

---

##### `BackupRetentionEnabled`<sup>Optional</sup> <a name="BackupRetentionEnabled" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.backupRetentionEnabled"></a>

```go
BackupRetentionEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#backup_retention_enabled LightsailDatabase#backup_retention_enabled}.

---

##### `FinalSnapshotName`<sup>Optional</sup> <a name="FinalSnapshotName" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.finalSnapshotName"></a>

```go
FinalSnapshotName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#final_snapshot_name LightsailDatabase#final_snapshot_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#id LightsailDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PreferredBackupWindow`<sup>Optional</sup> <a name="PreferredBackupWindow" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredBackupWindow"></a>

```go
PreferredBackupWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#preferred_backup_window LightsailDatabase#preferred_backup_window}.

---

##### `PreferredMaintenanceWindow`<sup>Optional</sup> <a name="PreferredMaintenanceWindow" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.preferredMaintenanceWindow"></a>

```go
PreferredMaintenanceWindow *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#preferred_maintenance_window LightsailDatabase#preferred_maintenance_window}.

---

##### `PubliclyAccessible`<sup>Optional</sup> <a name="PubliclyAccessible" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.publiclyAccessible"></a>

```go
PubliclyAccessible interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#publicly_accessible LightsailDatabase#publicly_accessible}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#region LightsailDatabase#region}

---

##### `SkipFinalSnapshot`<sup>Optional</sup> <a name="SkipFinalSnapshot" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.skipFinalSnapshot"></a>

```go
SkipFinalSnapshot interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#skip_final_snapshot LightsailDatabase#skip_final_snapshot}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#tags LightsailDatabase#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.lightsailDatabase.LightsailDatabaseConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/lightsail_database#tags_all LightsailDatabase#tags_all}.

---



