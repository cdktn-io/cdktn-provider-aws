# `ramResourceShareAssociationsExclusive` Submodule <a name="`ramResourceShareAssociationsExclusive` Submodule" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RamResourceShareAssociationsExclusive <a name="RamResourceShareAssociationsExclusive" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive aws_ram_resource_share_associations_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ramresourceshareassociationsexclusive"

ramresourceshareassociationsexclusive.NewRamResourceShareAssociationsExclusive(scope Construct, id *string, config RamResourceShareAssociationsExclusiveConfig) RamResourceShareAssociationsExclusive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig">RamResourceShareAssociationsExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig">RamResourceShareAssociationsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetPrincipals">ResetPrincipals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetResourceArns">ResetResourceArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetSources">ResetSources</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetPrincipals` <a name="ResetPrincipals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetPrincipals"></a>

```go
func ResetPrincipals()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceArns` <a name="ResetResourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetResourceArns"></a>

```go
func ResetResourceArns()
```

##### `ResetSources` <a name="ResetSources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.resetSources"></a>

```go
func ResetSources()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RamResourceShareAssociationsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ramresourceshareassociationsexclusive"

ramresourceshareassociationsexclusive.RamResourceShareAssociationsExclusive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ramresourceshareassociationsexclusive"

ramresourceshareassociationsexclusive.RamResourceShareAssociationsExclusive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ramresourceshareassociationsexclusive"

ramresourceshareassociationsexclusive.RamResourceShareAssociationsExclusive_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ramresourceshareassociationsexclusive"

ramresourceshareassociationsexclusive.RamResourceShareAssociationsExclusive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RamResourceShareAssociationsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RamResourceShareAssociationsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RamResourceShareAssociationsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RamResourceShareAssociationsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principalsInput">PrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArnsInput">ResourceArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArnInput">ResourceShareArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sourcesInput">SourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArn">ResourceShareArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sources">Sources</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principalsInput"></a>

```go
func PrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceArnsInput`<sup>Optional</sup> <a name="ResourceArnsInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArnsInput"></a>

```go
func ResourceArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceShareArnInput`<sup>Optional</sup> <a name="ResourceShareArnInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArnInput"></a>

```go
func ResourceShareArnInput() *string
```

- *Type:* *string

---

##### `SourcesInput`<sup>Optional</sup> <a name="SourcesInput" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sourcesInput"></a>

```go
func SourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceArns`<sup>Required</sup> <a name="ResourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceArns"></a>

```go
func ResourceArns() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.resourceShareArn"></a>

```go
func ResourceShareArn() *string
```

- *Type:* *string

---

##### `Sources`<sup>Required</sup> <a name="Sources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.sources"></a>

```go
func Sources() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RamResourceShareAssociationsExclusiveConfig <a name="RamResourceShareAssociationsExclusiveConfig" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ramresourceshareassociationsexclusive"

&ramresourceshareassociationsexclusive.RamResourceShareAssociationsExclusiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ResourceShareArn: *string,
	Principals: *[]*string,
	Region: *string,
	ResourceArns: *[]*string,
	Sources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceShareArn">ResourceShareArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#resource_share_arn RamResourceShareAssociationsExclusive#resource_share_arn}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.principals">Principals</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#principals RamResourceShareAssociationsExclusive#principals}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceArns">ResourceArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#resource_arns RamResourceShareAssociationsExclusive#resource_arns}. |
| <code><a href="#@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.sources">Sources</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#sources RamResourceShareAssociationsExclusive#sources}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ResourceShareArn`<sup>Required</sup> <a name="ResourceShareArn" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceShareArn"></a>

```go
ResourceShareArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#resource_share_arn RamResourceShareAssociationsExclusive#resource_share_arn}.

---

##### `Principals`<sup>Optional</sup> <a name="Principals" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.principals"></a>

```go
Principals *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#principals RamResourceShareAssociationsExclusive#principals}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#region RamResourceShareAssociationsExclusive#region}

---

##### `ResourceArns`<sup>Optional</sup> <a name="ResourceArns" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.resourceArns"></a>

```go
ResourceArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#resource_arns RamResourceShareAssociationsExclusive#resource_arns}.

---

##### `Sources`<sup>Optional</sup> <a name="Sources" id="@cdktn/provider-aws.ramResourceShareAssociationsExclusive.RamResourceShareAssociationsExclusiveConfig.property.sources"></a>

```go
Sources *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ram_resource_share_associations_exclusive#sources RamResourceShareAssociationsExclusive#sources}.

---



