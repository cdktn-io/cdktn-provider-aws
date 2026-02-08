# `ssoadminManagedPolicyAttachmentsExclusive` Submodule <a name="`ssoadminManagedPolicyAttachmentsExclusive` Submodule" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminManagedPolicyAttachmentsExclusive <a name="SsoadminManagedPolicyAttachmentsExclusive" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive aws_ssoadmin_managed_policy_attachments_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadminmanagedpolicyattachmentsexclusive"

ssoadminmanagedpolicyattachmentsexclusive.NewSsoadminManagedPolicyAttachmentsExclusive(scope Construct, id *string, config SsoadminManagedPolicyAttachmentsExclusiveConfig) SsoadminManagedPolicyAttachmentsExclusive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig">SsoadminManagedPolicyAttachmentsExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig">SsoadminManagedPolicyAttachmentsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.putTimeouts"></a>

```go
func PutTimeouts(value SsoadminManagedPolicyAttachmentsExclusiveTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a>

---

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminManagedPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadminmanagedpolicyattachmentsexclusive"

ssoadminmanagedpolicyattachmentsexclusive.SsoadminManagedPolicyAttachmentsExclusive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadminmanagedpolicyattachmentsexclusive"

ssoadminmanagedpolicyattachmentsexclusive.SsoadminManagedPolicyAttachmentsExclusive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadminmanagedpolicyattachmentsexclusive"

ssoadminmanagedpolicyattachmentsexclusive.SsoadminManagedPolicyAttachmentsExclusive_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadminmanagedpolicyattachmentsexclusive"

ssoadminmanagedpolicyattachmentsexclusive.SsoadminManagedPolicyAttachmentsExclusive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SsoadminManagedPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsoadminManagedPolicyAttachmentsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsoadminManagedPolicyAttachmentsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminManagedPolicyAttachmentsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference">SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.managedPolicyArnsInput">ManagedPolicyArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.permissionSetArnInput">PermissionSetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.managedPolicyArns">ManagedPolicyArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.permissionSetArn">PermissionSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.timeouts"></a>

```go
func Timeouts() SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference">SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference</a>

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `ManagedPolicyArnsInput`<sup>Optional</sup> <a name="ManagedPolicyArnsInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.managedPolicyArnsInput"></a>

```go
func ManagedPolicyArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionSetArnInput`<sup>Optional</sup> <a name="PermissionSetArnInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.permissionSetArnInput"></a>

```go
func PermissionSetArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `ManagedPolicyArns`<sup>Required</sup> <a name="ManagedPolicyArns" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.managedPolicyArns"></a>

```go
func ManagedPolicyArns() *[]*string
```

- *Type:* *[]*string

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.permissionSetArn"></a>

```go
func PermissionSetArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminManagedPolicyAttachmentsExclusiveConfig <a name="SsoadminManagedPolicyAttachmentsExclusiveConfig" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadminmanagedpolicyattachmentsexclusive"

&ssoadminmanagedpolicyattachmentsexclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	ManagedPolicyArns: *[]*string,
	PermissionSetArn: *string,
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#instance_arn SsoadminManagedPolicyAttachmentsExclusive#instance_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.managedPolicyArns">ManagedPolicyArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#managed_policy_arns SsoadminManagedPolicyAttachmentsExclusive#managed_policy_arns}. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.permissionSetArn">PermissionSetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#permission_set_arn SsoadminManagedPolicyAttachmentsExclusive#permission_set_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#instance_arn SsoadminManagedPolicyAttachmentsExclusive#instance_arn}.

---

##### `ManagedPolicyArns`<sup>Required</sup> <a name="ManagedPolicyArns" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.managedPolicyArns"></a>

```go
ManagedPolicyArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#managed_policy_arns SsoadminManagedPolicyAttachmentsExclusive#managed_policy_arns}.

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.permissionSetArn"></a>

```go
PermissionSetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#permission_set_arn SsoadminManagedPolicyAttachmentsExclusive#permission_set_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#region SsoadminManagedPolicyAttachmentsExclusive#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveConfig.property.timeouts"></a>

```go
Timeouts SsoadminManagedPolicyAttachmentsExclusiveTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts">SsoadminManagedPolicyAttachmentsExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#timeouts SsoadminManagedPolicyAttachmentsExclusive#timeouts}

---

### SsoadminManagedPolicyAttachmentsExclusiveTimeouts <a name="SsoadminManagedPolicyAttachmentsExclusiveTimeouts" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadminmanagedpolicyattachmentsexclusive"

&ssoadminmanagedpolicyattachmentsexclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#create SsoadminManagedPolicyAttachmentsExclusive#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_managed_policy_attachments_exclusive#update SsoadminManagedPolicyAttachmentsExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference <a name="SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadminmanagedpolicyattachmentsexclusive"

ssoadminmanagedpolicyattachmentsexclusive.NewSsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminManagedPolicyAttachmentsExclusive.SsoadminManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



