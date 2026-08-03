# `pinpointsmsvoicev2Pool` Submodule <a name="`pinpointsmsvoicev2Pool` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2Pool <a name="Pinpointsmsvoicev2Pool" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool aws_pinpointsmsvoicev2_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/pinpointsmsvoicev2pool"

pinpointsmsvoicev2pool.NewPinpointsmsvoicev2Pool(scope Construct, id *string, config Pinpointsmsvoicev2PoolConfig) Pinpointsmsvoicev2Pool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig">Pinpointsmsvoicev2PoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig">Pinpointsmsvoicev2PoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled">ResetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode">ResetIsoCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName">ResetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled">ResetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled">ResetSharedRoutesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn">ResetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole">ResetTwoWayChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled">ResetTwoWayEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts"></a>

```go
func PutTimeouts(value Pinpointsmsvoicev2PoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---

##### `ResetDeletionProtectionEnabled` <a name="ResetDeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled"></a>

```go
func ResetDeletionProtectionEnabled()
```

##### `ResetIsoCountryCode` <a name="ResetIsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode"></a>

```go
func ResetIsoCountryCode()
```

##### `ResetOptOutListName` <a name="ResetOptOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName"></a>

```go
func ResetOptOutListName()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSelfManagedOptOutsEnabled` <a name="ResetSelfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled"></a>

```go
func ResetSelfManagedOptOutsEnabled()
```

##### `ResetSharedRoutesEnabled` <a name="ResetSharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled"></a>

```go
func ResetSharedRoutesEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTwoWayChannelArn` <a name="ResetTwoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn"></a>

```go
func ResetTwoWayChannelArn()
```

##### `ResetTwoWayChannelRole` <a name="ResetTwoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole"></a>

```go
func ResetTwoWayChannelRole()
```

##### `ResetTwoWayEnabled` <a name="ResetTwoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled"></a>

```go
func ResetTwoWayEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/pinpointsmsvoicev2pool"

pinpointsmsvoicev2pool.Pinpointsmsvoicev2Pool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/pinpointsmsvoicev2pool"

pinpointsmsvoicev2pool.Pinpointsmsvoicev2Pool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/pinpointsmsvoicev2pool"

pinpointsmsvoicev2pool.Pinpointsmsvoicev2Pool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/pinpointsmsvoicev2pool"

pinpointsmsvoicev2pool.Pinpointsmsvoicev2Pool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Pinpointsmsvoicev2Pool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Pinpointsmsvoicev2Pool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2Pool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput">DeletionProtectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput">IsoCountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput">MessageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput">OptOutListNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput">OriginationIdentitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput">SelfManagedOptOutsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput">SharedRoutesEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput">TwoWayChannelArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput">TwoWayChannelRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput">TwoWayEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode">IsoCountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType">MessageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName">OptOutListName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities">OriginationIdentities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled">SharedRoutesEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole">TwoWayChannelRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled">TwoWayEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts"></a>

```go
func Timeouts() Pinpointsmsvoicev2PoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a>

---

##### `DeletionProtectionEnabledInput`<sup>Optional</sup> <a name="DeletionProtectionEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput"></a>

```go
func DeletionProtectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsoCountryCodeInput`<sup>Optional</sup> <a name="IsoCountryCodeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput"></a>

```go
func IsoCountryCodeInput() *string
```

- *Type:* *string

---

##### `MessageTypeInput`<sup>Optional</sup> <a name="MessageTypeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput"></a>

```go
func MessageTypeInput() *string
```

- *Type:* *string

---

##### `OptOutListNameInput`<sup>Optional</sup> <a name="OptOutListNameInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput"></a>

```go
func OptOutListNameInput() *string
```

- *Type:* *string

---

##### `OriginationIdentitiesInput`<sup>Optional</sup> <a name="OriginationIdentitiesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput"></a>

```go
func OriginationIdentitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SelfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput"></a>

```go
func SelfManagedOptOutsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SharedRoutesEnabledInput`<sup>Optional</sup> <a name="SharedRoutesEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput"></a>

```go
func SharedRoutesEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TwoWayChannelArnInput`<sup>Optional</sup> <a name="TwoWayChannelArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput"></a>

```go
func TwoWayChannelArnInput() *string
```

- *Type:* *string

---

##### `TwoWayChannelRoleInput`<sup>Optional</sup> <a name="TwoWayChannelRoleInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput"></a>

```go
func TwoWayChannelRoleInput() *string
```

- *Type:* *string

---

##### `TwoWayEnabledInput`<sup>Optional</sup> <a name="TwoWayEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput"></a>

```go
func TwoWayEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled"></a>

```go
func DeletionProtectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsoCountryCode`<sup>Required</sup> <a name="IsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode"></a>

```go
func IsoCountryCode() *string
```

- *Type:* *string

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType"></a>

```go
func MessageType() *string
```

- *Type:* *string

---

##### `OptOutListName`<sup>Required</sup> <a name="OptOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName"></a>

```go
func OptOutListName() *string
```

- *Type:* *string

---

##### `OriginationIdentities`<sup>Required</sup> <a name="OriginationIdentities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities"></a>

```go
func OriginationIdentities() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SelfManagedOptOutsEnabled`<sup>Required</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled"></a>

```go
func SelfManagedOptOutsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SharedRoutesEnabled`<sup>Required</sup> <a name="SharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled"></a>

```go
func SharedRoutesEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TwoWayChannelArn`<sup>Required</sup> <a name="TwoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn"></a>

```go
func TwoWayChannelArn() *string
```

- *Type:* *string

---

##### `TwoWayChannelRole`<sup>Required</sup> <a name="TwoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole"></a>

```go
func TwoWayChannelRole() *string
```

- *Type:* *string

---

##### `TwoWayEnabled`<sup>Required</sup> <a name="TwoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled"></a>

```go
func TwoWayEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2PoolConfig <a name="Pinpointsmsvoicev2PoolConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/pinpointsmsvoicev2pool"

&pinpointsmsvoicev2pool.Pinpointsmsvoicev2PoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	MessageType: *string,
	OriginationIdentities: *[]*string,
	DeletionProtectionEnabled: interface{},
	IsoCountryCode: *string,
	OptOutListName: *string,
	Region: *string,
	SelfManagedOptOutsEnabled: interface{},
	SharedRoutesEnabled: interface{},
	Tags: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v24.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts,
	TwoWayChannelArn: *string,
	TwoWayChannelRole: *string,
	TwoWayEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType">MessageType</a></code> | <code>*string</code> | Type of message. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities">OriginationIdentities</a></code> | <code>*[]*string</code> | Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>interface{}</code> | Whether deletion protection is enabled. When `true`, the pool cannot be deleted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode">IsoCountryCode</a></code> | <code>*string</code> | Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName">OptOutListName</a></code> | <code>*string</code> | Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled">SelfManagedOptOutsEnabled</a></code> | <code>interface{}</code> | Whether the pool relies on self-managed opt-out handling. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled">SharedRoutesEnabled</a></code> | <code>interface{}</code> | Whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn">TwoWayChannelArn</a></code> | <code>*string</code> | ARN of the two-way channel that receives inbound messages. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole">TwoWayChannelRole</a></code> | <code>*string</code> | ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled">TwoWayEnabled</a></code> | <code>interface{}</code> | Whether inbound message reception is enabled for the pool. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `MessageType`<sup>Required</sup> <a name="MessageType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType"></a>

```go
MessageType *string
```

- *Type:* *string

Type of message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#message_type Pinpointsmsvoicev2Pool#message_type}

---

##### `OriginationIdentities`<sup>Required</sup> <a name="OriginationIdentities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities"></a>

```go
OriginationIdentities *[]*string
```

- *Type:* *[]*string

Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#origination_identities Pinpointsmsvoicev2Pool#origination_identities}

---

##### `DeletionProtectionEnabled`<sup>Optional</sup> <a name="DeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled"></a>

```go
DeletionProtectionEnabled interface{}
```

- *Type:* interface{}

Whether deletion protection is enabled. When `true`, the pool cannot be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#deletion_protection_enabled Pinpointsmsvoicev2Pool#deletion_protection_enabled}

---

##### `IsoCountryCode`<sup>Optional</sup> <a name="IsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode"></a>

```go
IsoCountryCode *string
```

- *Type:* *string

Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool.

This field is optional for origination identity types that are not country-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#iso_country_code Pinpointsmsvoicev2Pool#iso_country_code}

---

##### `OptOutListName`<sup>Optional</sup> <a name="OptOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName"></a>

```go
OptOutListName *string
```

- *Type:* *string

Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#opt_out_list_name Pinpointsmsvoicev2Pool#opt_out_list_name}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#region Pinpointsmsvoicev2Pool#region}

---

##### `SelfManagedOptOutsEnabled`<sup>Optional</sup> <a name="SelfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled"></a>

```go
SelfManagedOptOutsEnabled interface{}
```

- *Type:* interface{}

Whether the pool relies on self-managed opt-out handling.

When `false`, AWS auto-replies to HELP/STOP requests and manages the opt-out list. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#self_managed_opt_outs_enabled Pinpointsmsvoicev2Pool#self_managed_opt_outs_enabled}

---

##### `SharedRoutesEnabled`<sup>Optional</sup> <a name="SharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled"></a>

```go
SharedRoutesEnabled interface{}
```

- *Type:* interface{}

Whether shared routes are enabled for the pool.

When `true`, messages may use shared phone numbers or sender IDs in countries that allow it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#shared_routes_enabled Pinpointsmsvoicev2Pool#shared_routes_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts"></a>

```go
Timeouts Pinpointsmsvoicev2PoolTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#timeouts Pinpointsmsvoicev2Pool#timeouts}

---

##### `TwoWayChannelArn`<sup>Optional</sup> <a name="TwoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn"></a>

```go
TwoWayChannelArn *string
```

- *Type:* *string

ARN of the two-way channel that receives inbound messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_arn Pinpointsmsvoicev2Pool#two_way_channel_arn}

---

##### `TwoWayChannelRole`<sup>Optional</sup> <a name="TwoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole"></a>

```go
TwoWayChannelRole *string
```

- *Type:* *string

ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_role Pinpointsmsvoicev2Pool#two_way_channel_role}

---

##### `TwoWayEnabled`<sup>Optional</sup> <a name="TwoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled"></a>

```go
TwoWayEnabled interface{}
```

- *Type:* interface{}

Whether inbound message reception is enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_enabled Pinpointsmsvoicev2Pool#two_way_enabled}

---

### Pinpointsmsvoicev2PoolTimeouts <a name="Pinpointsmsvoicev2PoolTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/pinpointsmsvoicev2pool"

&pinpointsmsvoicev2pool.Pinpointsmsvoicev2PoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create">Create</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update">Update</a></code> | <code>*string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#create Pinpointsmsvoicev2Pool#create}

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#delete Pinpointsmsvoicev2Pool#delete}

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#update Pinpointsmsvoicev2Pool#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2PoolTimeoutsOutputReference <a name="Pinpointsmsvoicev2PoolTimeoutsOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/pinpointsmsvoicev2pool"

pinpointsmsvoicev2pool.NewPinpointsmsvoicev2PoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Pinpointsmsvoicev2PoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



