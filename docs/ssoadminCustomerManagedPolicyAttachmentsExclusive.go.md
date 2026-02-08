# `ssoadminCustomerManagedPolicyAttachmentsExclusive` Submodule <a name="`ssoadminCustomerManagedPolicyAttachmentsExclusive` Submodule" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminCustomerManagedPolicyAttachmentsExclusive <a name="SsoadminCustomerManagedPolicyAttachmentsExclusive" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive aws_ssoadmin_customer_managed_policy_attachments_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

ssoadmincustomermanagedpolicyattachmentsexclusive.NewSsoadminCustomerManagedPolicyAttachmentsExclusive(scope Construct, id *string, config SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig) SsoadminCustomerManagedPolicyAttachmentsExclusive
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig">SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig">SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putCustomerManagedPolicyReference">PutCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetCustomerManagedPolicyReference">ResetCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCustomerManagedPolicyReference` <a name="PutCustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putCustomerManagedPolicyReference"></a>

```go
func PutCustomerManagedPolicyReference(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putCustomerManagedPolicyReference.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putTimeouts"></a>

```go
func PutTimeouts(value SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a>

---

##### `ResetCustomerManagedPolicyReference` <a name="ResetCustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetCustomerManagedPolicyReference"></a>

```go
func ResetCustomerManagedPolicyReference()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminCustomerManagedPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

ssoadmincustomermanagedpolicyattachmentsexclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

ssoadmincustomermanagedpolicyattachmentsexclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

ssoadmincustomermanagedpolicyattachmentsexclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

ssoadmincustomermanagedpolicyattachmentsexclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SsoadminCustomerManagedPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsoadminCustomerManagedPolicyAttachmentsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsoadminCustomerManagedPolicyAttachmentsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminCustomerManagedPolicyAttachmentsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.customerManagedPolicyReference">CustomerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.customerManagedPolicyReferenceInput">CustomerManagedPolicyReferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.instanceArnInput">InstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.permissionSetArnInput">PermissionSetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.permissionSetArn">PermissionSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerManagedPolicyReference`<sup>Required</sup> <a name="CustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.customerManagedPolicyReference"></a>

```go
func CustomerManagedPolicyReference() SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.timeouts"></a>

```go
func Timeouts() SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference</a>

---

##### `CustomerManagedPolicyReferenceInput`<sup>Optional</sup> <a name="CustomerManagedPolicyReferenceInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.customerManagedPolicyReferenceInput"></a>

```go
func CustomerManagedPolicyReferenceInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.instanceArnInput"></a>

```go
func InstanceArnInput() *string
```

- *Type:* *string

---

##### `PermissionSetArnInput`<sup>Optional</sup> <a name="PermissionSetArnInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.permissionSetArnInput"></a>

```go
func PermissionSetArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.instanceArn"></a>

```go
func InstanceArn() *string
```

- *Type:* *string

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.permissionSetArn"></a>

```go
func PermissionSetArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

&ssoadmincustomermanagedpolicyattachmentsexclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstanceArn: *string,
	PermissionSetArn: *string,
	CustomerManagedPolicyReference: interface{},
	Region: *string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.instanceArn">InstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#instance_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#instance_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.permissionSetArn">PermissionSetArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#permission_set_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#permission_set_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.customerManagedPolicyReference">CustomerManagedPolicyReference</a></code> | <code>interface{}</code> | customer_managed_policy_reference block. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.instanceArn"></a>

```go
InstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#instance_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#instance_arn}.

---

##### `PermissionSetArn`<sup>Required</sup> <a name="PermissionSetArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.permissionSetArn"></a>

```go
PermissionSetArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#permission_set_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#permission_set_arn}.

---

##### `CustomerManagedPolicyReference`<sup>Optional</sup> <a name="CustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.customerManagedPolicyReference"></a>

```go
CustomerManagedPolicyReference interface{}
```

- *Type:* interface{}

customer_managed_policy_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#customer_managed_policy_reference SsoadminCustomerManagedPolicyAttachmentsExclusive#customer_managed_policy_reference}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#region SsoadminCustomerManagedPolicyAttachmentsExclusive#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.timeouts"></a>

```go
Timeouts SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#timeouts SsoadminCustomerManagedPolicyAttachmentsExclusive#timeouts}

---

### SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

&ssoadmincustomermanagedpolicyattachmentsexclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference {
	Name: *string,
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#name SsoadminCustomerManagedPolicyAttachmentsExclusive#name}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#path SsoadminCustomerManagedPolicyAttachmentsExclusive#path}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#name SsoadminCustomerManagedPolicyAttachmentsExclusive#name}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#path SsoadminCustomerManagedPolicyAttachmentsExclusive#path}.

---

### SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

&ssoadmincustomermanagedpolicyattachmentsexclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts {
	Create: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#create SsoadminCustomerManagedPolicyAttachmentsExclusive#create}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#update SsoadminCustomerManagedPolicyAttachmentsExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

ssoadmincustomermanagedpolicyattachmentsexclusive.NewSsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.get"></a>

```go
func Get(index *f64) SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

ssoadmincustomermanagedpolicyattachmentsexclusive.NewSsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resetPath">ResetPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```go
func ResetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/ssoadmincustomermanagedpolicyattachmentsexclusive"

ssoadmincustomermanagedpolicyattachmentsexclusive.NewSsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



