# `ec2AllowedImagesSettings` Submodule <a name="`ec2AllowedImagesSettings` Submodule" id="@cdktf/provider-aws.ec2AllowedImagesSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2AllowedImagesSettings <a name="Ec2AllowedImagesSettings" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings aws_ec2_allowed_images_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.NewEc2AllowedImagesSettings(scope Construct, id *string, config Ec2AllowedImagesSettingsConfig) Ec2AllowedImagesSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig">Ec2AllowedImagesSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig">Ec2AllowedImagesSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.putImageCriterion">PutImageCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetImageCriterion">ResetImageCriterion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutImageCriterion` <a name="PutImageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.putImageCriterion"></a>

```go
func PutImageCriterion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.putImageCriterion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetImageCriterion` <a name="ResetImageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetImageCriterion"></a>

```go
func ResetImageCriterion()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Ec2AllowedImagesSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.Ec2AllowedImagesSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.Ec2AllowedImagesSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.Ec2AllowedImagesSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.Ec2AllowedImagesSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Ec2AllowedImagesSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2AllowedImagesSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2AllowedImagesSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Ec2AllowedImagesSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterion">ImageCriterion</a></code> | <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList">Ec2AllowedImagesSettingsImageCriterionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterionInput">ImageCriterionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ImageCriterion`<sup>Required</sup> <a name="ImageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterion"></a>

```go
func ImageCriterion() Ec2AllowedImagesSettingsImageCriterionList
```

- *Type:* <a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList">Ec2AllowedImagesSettingsImageCriterionList</a>

---

##### `ImageCriterionInput`<sup>Optional</sup> <a name="ImageCriterionInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.imageCriterionInput"></a>

```go
func ImageCriterionInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2AllowedImagesSettingsConfig <a name="Ec2AllowedImagesSettingsConfig" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

&ec2allowedimagessettings.Ec2AllowedImagesSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	State: *string,
	ImageCriterion: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.imageCriterion">ImageCriterion</a></code> | <code>interface{}</code> | image_criterion block. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#state Ec2AllowedImagesSettings#state}.

---

##### `ImageCriterion`<sup>Optional</sup> <a name="ImageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.imageCriterion"></a>

```go
ImageCriterion interface{}
```

- *Type:* interface{}

image_criterion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_criterion Ec2AllowedImagesSettings#image_criterion}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#region Ec2AllowedImagesSettings#region}

---

### Ec2AllowedImagesSettingsImageCriterion <a name="Ec2AllowedImagesSettingsImageCriterion" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

&ec2allowedimagessettings.Ec2AllowedImagesSettingsImageCriterion {
	CreationDateCondition: interface{},
	DeprecationTimeCondition: interface{},
	ImageNames: *[]*string,
	ImageProviders: *[]*string,
	MarketplaceProductCodes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.creationDateCondition">CreationDateCondition</a></code> | <code>interface{}</code> | creation_date_condition block. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.deprecationTimeCondition">DeprecationTimeCondition</a></code> | <code>interface{}</code> | deprecation_time_condition block. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageNames">ImageNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_names Ec2AllowedImagesSettings#image_names}. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageProviders">ImageProviders</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_providers Ec2AllowedImagesSettings#image_providers}. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.marketplaceProductCodes">MarketplaceProductCodes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#marketplace_product_codes Ec2AllowedImagesSettings#marketplace_product_codes}. |

---

##### `CreationDateCondition`<sup>Optional</sup> <a name="CreationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.creationDateCondition"></a>

```go
CreationDateCondition interface{}
```

- *Type:* interface{}

creation_date_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#creation_date_condition Ec2AllowedImagesSettings#creation_date_condition}

---

##### `DeprecationTimeCondition`<sup>Optional</sup> <a name="DeprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.deprecationTimeCondition"></a>

```go
DeprecationTimeCondition interface{}
```

- *Type:* interface{}

deprecation_time_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#deprecation_time_condition Ec2AllowedImagesSettings#deprecation_time_condition}

---

##### `ImageNames`<sup>Optional</sup> <a name="ImageNames" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageNames"></a>

```go
ImageNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_names Ec2AllowedImagesSettings#image_names}.

---

##### `ImageProviders`<sup>Optional</sup> <a name="ImageProviders" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.imageProviders"></a>

```go
ImageProviders *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#image_providers Ec2AllowedImagesSettings#image_providers}.

---

##### `MarketplaceProductCodes`<sup>Optional</sup> <a name="MarketplaceProductCodes" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterion.property.marketplaceProductCodes"></a>

```go
MarketplaceProductCodes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#marketplace_product_codes Ec2AllowedImagesSettings#marketplace_product_codes}.

---

### Ec2AllowedImagesSettingsImageCriterionCreationDateCondition <a name="Ec2AllowedImagesSettingsImageCriterionCreationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

&ec2allowedimagessettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition {
	MaximumDaysSinceCreated: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.property.maximumDaysSinceCreated">MaximumDaysSinceCreated</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_created Ec2AllowedImagesSettings#maximum_days_since_created}. |

---

##### `MaximumDaysSinceCreated`<sup>Optional</sup> <a name="MaximumDaysSinceCreated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateCondition.property.maximumDaysSinceCreated"></a>

```go
MaximumDaysSinceCreated *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_created Ec2AllowedImagesSettings#maximum_days_since_created}.

---

### Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition <a name="Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

&ec2allowedimagessettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition {
	MaximumDaysSinceDeprecated: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.property.maximumDaysSinceDeprecated">MaximumDaysSinceDeprecated</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_deprecated Ec2AllowedImagesSettings#maximum_days_since_deprecated}. |

---

##### `MaximumDaysSinceDeprecated`<sup>Optional</sup> <a name="MaximumDaysSinceDeprecated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeCondition.property.maximumDaysSinceDeprecated"></a>

```go
MaximumDaysSinceDeprecated *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/ec2_allowed_images_settings#maximum_days_since_deprecated Ec2AllowedImagesSettings#maximum_days_since_deprecated}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList <a name="Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.NewEc2AllowedImagesSettingsImageCriterionCreationDateConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.get"></a>

```go
func Get(index *f64) Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference <a name="Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.NewEc2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resetMaximumDaysSinceCreated">ResetMaximumDaysSinceCreated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumDaysSinceCreated` <a name="ResetMaximumDaysSinceCreated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.resetMaximumDaysSinceCreated"></a>

```go
func ResetMaximumDaysSinceCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreatedInput">MaximumDaysSinceCreatedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreated">MaximumDaysSinceCreated</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumDaysSinceCreatedInput`<sup>Optional</sup> <a name="MaximumDaysSinceCreatedInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreatedInput"></a>

```go
func MaximumDaysSinceCreatedInput() *f64
```

- *Type:* *f64

---

##### `MaximumDaysSinceCreated`<sup>Required</sup> <a name="MaximumDaysSinceCreated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.maximumDaysSinceCreated"></a>

```go
func MaximumDaysSinceCreated() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList <a name="Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.NewEc2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.get"></a>

```go
func Get(index *f64) Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference <a name="Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.NewEc2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resetMaximumDaysSinceDeprecated">ResetMaximumDaysSinceDeprecated</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaximumDaysSinceDeprecated` <a name="ResetMaximumDaysSinceDeprecated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.resetMaximumDaysSinceDeprecated"></a>

```go
func ResetMaximumDaysSinceDeprecated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecatedInput">MaximumDaysSinceDeprecatedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecated">MaximumDaysSinceDeprecated</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaximumDaysSinceDeprecatedInput`<sup>Optional</sup> <a name="MaximumDaysSinceDeprecatedInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecatedInput"></a>

```go
func MaximumDaysSinceDeprecatedInput() *f64
```

- *Type:* *f64

---

##### `MaximumDaysSinceDeprecated`<sup>Required</sup> <a name="MaximumDaysSinceDeprecated" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.maximumDaysSinceDeprecated"></a>

```go
func MaximumDaysSinceDeprecated() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2AllowedImagesSettingsImageCriterionList <a name="Ec2AllowedImagesSettingsImageCriterionList" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.NewEc2AllowedImagesSettingsImageCriterionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2AllowedImagesSettingsImageCriterionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.get"></a>

```go
func Get(index *f64) Ec2AllowedImagesSettingsImageCriterionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2AllowedImagesSettingsImageCriterionOutputReference <a name="Ec2AllowedImagesSettingsImageCriterionOutputReference" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-aws-go/aws/v21/ec2allowedimagessettings"

ec2allowedimagessettings.NewEc2AllowedImagesSettingsImageCriterionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2AllowedImagesSettingsImageCriterionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putCreationDateCondition">PutCreationDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putDeprecationTimeCondition">PutDeprecationTimeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetCreationDateCondition">ResetCreationDateCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetDeprecationTimeCondition">ResetDeprecationTimeCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageNames">ResetImageNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageProviders">ResetImageProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetMarketplaceProductCodes">ResetMarketplaceProductCodes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCreationDateCondition` <a name="PutCreationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putCreationDateCondition"></a>

```go
func PutCreationDateCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putCreationDateCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDeprecationTimeCondition` <a name="PutDeprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putDeprecationTimeCondition"></a>

```go
func PutDeprecationTimeCondition(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.putDeprecationTimeCondition.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCreationDateCondition` <a name="ResetCreationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetCreationDateCondition"></a>

```go
func ResetCreationDateCondition()
```

##### `ResetDeprecationTimeCondition` <a name="ResetDeprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetDeprecationTimeCondition"></a>

```go
func ResetDeprecationTimeCondition()
```

##### `ResetImageNames` <a name="ResetImageNames" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageNames"></a>

```go
func ResetImageNames()
```

##### `ResetImageProviders` <a name="ResetImageProviders" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetImageProviders"></a>

```go
func ResetImageProviders()
```

##### `ResetMarketplaceProductCodes` <a name="ResetMarketplaceProductCodes" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.resetMarketplaceProductCodes"></a>

```go
func ResetMarketplaceProductCodes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateCondition">CreationDateCondition</a></code> | <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList">Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeCondition">DeprecationTimeCondition</a></code> | <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateConditionInput">CreationDateConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeConditionInput">DeprecationTimeConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNamesInput">ImageNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProvidersInput">ImageProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodesInput">MarketplaceProductCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNames">ImageNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProviders">ImageProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodes">MarketplaceProductCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreationDateCondition`<sup>Required</sup> <a name="CreationDateCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateCondition"></a>

```go
func CreationDateCondition() Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList">Ec2AllowedImagesSettingsImageCriterionCreationDateConditionList</a>

---

##### `DeprecationTimeCondition`<sup>Required</sup> <a name="DeprecationTimeCondition" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeCondition"></a>

```go
func DeprecationTimeCondition() Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList
```

- *Type:* <a href="#@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList">Ec2AllowedImagesSettingsImageCriterionDeprecationTimeConditionList</a>

---

##### `CreationDateConditionInput`<sup>Optional</sup> <a name="CreationDateConditionInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.creationDateConditionInput"></a>

```go
func CreationDateConditionInput() interface{}
```

- *Type:* interface{}

---

##### `DeprecationTimeConditionInput`<sup>Optional</sup> <a name="DeprecationTimeConditionInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.deprecationTimeConditionInput"></a>

```go
func DeprecationTimeConditionInput() interface{}
```

- *Type:* interface{}

---

##### `ImageNamesInput`<sup>Optional</sup> <a name="ImageNamesInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNamesInput"></a>

```go
func ImageNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ImageProvidersInput`<sup>Optional</sup> <a name="ImageProvidersInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProvidersInput"></a>

```go
func ImageProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `MarketplaceProductCodesInput`<sup>Optional</sup> <a name="MarketplaceProductCodesInput" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodesInput"></a>

```go
func MarketplaceProductCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ImageNames`<sup>Required</sup> <a name="ImageNames" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageNames"></a>

```go
func ImageNames() *[]*string
```

- *Type:* *[]*string

---

##### `ImageProviders`<sup>Required</sup> <a name="ImageProviders" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.imageProviders"></a>

```go
func ImageProviders() *[]*string
```

- *Type:* *[]*string

---

##### `MarketplaceProductCodes`<sup>Required</sup> <a name="MarketplaceProductCodes" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.marketplaceProductCodes"></a>

```go
func MarketplaceProductCodes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.ec2AllowedImagesSettings.Ec2AllowedImagesSettingsImageCriterionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



