# `shieldDrtAccessLogBucketAssociation` Submodule <a name="`shieldDrtAccessLogBucketAssociation` Submodule" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ShieldDrtAccessLogBucketAssociation <a name="ShieldDrtAccessLogBucketAssociation" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_drt_access_log_bucket_association aws_shield_drt_access_log_bucket_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/shielddrtaccesslogbucketassociation"

shielddrtaccesslogbucketassociation.NewShieldDrtAccessLogBucketAssociation(scope Construct, id *string, config ShieldDrtAccessLogBucketAssociationConfig) ShieldDrtAccessLogBucketAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig">ShieldDrtAccessLogBucketAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig">ShieldDrtAccessLogBucketAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts"></a>

```go
func PutTimeouts(value ShieldDrtAccessLogBucketAssociationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

---

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ShieldDrtAccessLogBucketAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/shielddrtaccesslogbucketassociation"

shielddrtaccesslogbucketassociation.ShieldDrtAccessLogBucketAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/shielddrtaccesslogbucketassociation"

shielddrtaccesslogbucketassociation.ShieldDrtAccessLogBucketAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/shielddrtaccesslogbucketassociation"

shielddrtaccesslogbucketassociation.ShieldDrtAccessLogBucketAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/shielddrtaccesslogbucketassociation"

shielddrtaccesslogbucketassociation.ShieldDrtAccessLogBucketAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ShieldDrtAccessLogBucketAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ShieldDrtAccessLogBucketAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ShieldDrtAccessLogBucketAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_drt_access_log_bucket_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ShieldDrtAccessLogBucketAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference">ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucketInput">LogBucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationIdInput">RoleArnAssociationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucket">LogBucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationId">RoleArnAssociationId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeouts"></a>

```go
func Timeouts() ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference">ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference</a>

---

##### `LogBucketInput`<sup>Optional</sup> <a name="LogBucketInput" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucketInput"></a>

```go
func LogBucketInput() *string
```

- *Type:* *string

---

##### `RoleArnAssociationIdInput`<sup>Optional</sup> <a name="RoleArnAssociationIdInput" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationIdInput"></a>

```go
func RoleArnAssociationIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.logBucket"></a>

```go
func LogBucket() *string
```

- *Type:* *string

---

##### `RoleArnAssociationId`<sup>Required</sup> <a name="RoleArnAssociationId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.roleArnAssociationId"></a>

```go
func RoleArnAssociationId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ShieldDrtAccessLogBucketAssociationConfig <a name="ShieldDrtAccessLogBucketAssociationConfig" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/shielddrtaccesslogbucketassociation"

&shielddrtaccesslogbucketassociation.ShieldDrtAccessLogBucketAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LogBucket: *string,
	RoleArnAssociationId: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v21.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.logBucket">LogBucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.roleArnAssociationId">RoleArnAssociationId</a></code> | <code>*string</code> | Unused. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LogBucket`<sup>Required</sup> <a name="LogBucket" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.logBucket"></a>

```go
LogBucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_drt_access_log_bucket_association#log_bucket ShieldDrtAccessLogBucketAssociation#log_bucket}.

---

##### `RoleArnAssociationId`<sup>Required</sup> <a name="RoleArnAssociationId" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.roleArnAssociationId"></a>

```go
RoleArnAssociationId *string
```

- *Type:* *string

Unused.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_drt_access_log_bucket_association#role_arn_association_id ShieldDrtAccessLogBucketAssociation#role_arn_association_id}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationConfig.property.timeouts"></a>

```go
Timeouts ShieldDrtAccessLogBucketAssociationTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts">ShieldDrtAccessLogBucketAssociationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_drt_access_log_bucket_association#timeouts ShieldDrtAccessLogBucketAssociation#timeouts}

---

### ShieldDrtAccessLogBucketAssociationTimeouts <a name="ShieldDrtAccessLogBucketAssociationTimeouts" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/shielddrtaccesslogbucketassociation"

&shielddrtaccesslogbucketassociation.ShieldDrtAccessLogBucketAssociationTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_drt_access_log_bucket_association#create ShieldDrtAccessLogBucketAssociation#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/shield_drt_access_log_bucket_association#delete ShieldDrtAccessLogBucketAssociation#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference <a name="ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v21/shielddrtaccesslogbucketassociation"

shielddrtaccesslogbucketassociation.NewShieldDrtAccessLogBucketAssociationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.shieldDrtAccessLogBucketAssociation.ShieldDrtAccessLogBucketAssociationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



