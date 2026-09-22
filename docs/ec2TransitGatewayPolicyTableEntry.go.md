# `ec2TransitGatewayPolicyTableEntry` Submodule <a name="`ec2TransitGatewayPolicyTableEntry` Submodule" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2TransitGatewayPolicyTableEntry <a name="Ec2TransitGatewayPolicyTableEntry" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry aws_ec2_transit_gateway_policy_table_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

ec2transitgatewaypolicytableentry.NewEc2TransitGatewayPolicyTableEntry(scope Construct, id *string, config Ec2TransitGatewayPolicyTableEntryConfig) Ec2TransitGatewayPolicyTableEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig">Ec2TransitGatewayPolicyTableEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig">Ec2TransitGatewayPolicyTableEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.putPolicyRule">PutPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.resetPolicyRule">ResetPolicyRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicyRule` <a name="PutPolicyRule" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.putPolicyRule"></a>

```go
func PutPolicyRule(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.putPolicyRule.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPolicyRule` <a name="ResetPolicyRule" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.resetPolicyRule"></a>

```go
func ResetPolicyRule()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2TransitGatewayPolicyTableEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

ec2transitgatewaypolicytableentry.Ec2TransitGatewayPolicyTableEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

ec2transitgatewaypolicytableentry.Ec2TransitGatewayPolicyTableEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

ec2transitgatewaypolicytableentry.Ec2TransitGatewayPolicyTableEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

ec2transitgatewaypolicytableentry.Ec2TransitGatewayPolicyTableEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2TransitGatewayPolicyTableEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2TransitGatewayPolicyTableEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2TransitGatewayPolicyTableEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2TransitGatewayPolicyTableEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.policyRule">PolicyRule</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList">Ec2TransitGatewayPolicyTableEntryPolicyRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.policyRuleInput">PolicyRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.policyRuleNumberInput">PolicyRuleNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.targetRouteTableIdInput">TargetRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.transitGatewayPolicyTableIdInput">TransitGatewayPolicyTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.policyRuleNumber">PolicyRuleNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.targetRouteTableId">TargetRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.transitGatewayPolicyTableId">TransitGatewayPolicyTableId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyRule`<sup>Required</sup> <a name="PolicyRule" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.policyRule"></a>

```go
func PolicyRule() Ec2TransitGatewayPolicyTableEntryPolicyRuleList
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList">Ec2TransitGatewayPolicyTableEntryPolicyRuleList</a>

---

##### `PolicyRuleInput`<sup>Optional</sup> <a name="PolicyRuleInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.policyRuleInput"></a>

```go
func PolicyRuleInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyRuleNumberInput`<sup>Optional</sup> <a name="PolicyRuleNumberInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.policyRuleNumberInput"></a>

```go
func PolicyRuleNumberInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TargetRouteTableIdInput`<sup>Optional</sup> <a name="TargetRouteTableIdInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.targetRouteTableIdInput"></a>

```go
func TargetRouteTableIdInput() *string
```

- *Type:* *string

---

##### `TransitGatewayPolicyTableIdInput`<sup>Optional</sup> <a name="TransitGatewayPolicyTableIdInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.transitGatewayPolicyTableIdInput"></a>

```go
func TransitGatewayPolicyTableIdInput() *string
```

- *Type:* *string

---

##### `PolicyRuleNumber`<sup>Required</sup> <a name="PolicyRuleNumber" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.policyRuleNumber"></a>

```go
func PolicyRuleNumber() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TargetRouteTableId`<sup>Required</sup> <a name="TargetRouteTableId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.targetRouteTableId"></a>

```go
func TargetRouteTableId() *string
```

- *Type:* *string

---

##### `TransitGatewayPolicyTableId`<sup>Required</sup> <a name="TransitGatewayPolicyTableId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.transitGatewayPolicyTableId"></a>

```go
func TransitGatewayPolicyTableId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2TransitGatewayPolicyTableEntryConfig <a name="Ec2TransitGatewayPolicyTableEntryConfig" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

&ec2transitgatewaypolicytableentry.Ec2TransitGatewayPolicyTableEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyRuleNumber: *string,
	TargetRouteTableId: *string,
	TransitGatewayPolicyTableId: *string,
	PolicyRule: interface{},
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.policyRuleNumber">PolicyRuleNumber</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#policy_rule_number Ec2TransitGatewayPolicyTableEntry#policy_rule_number}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.targetRouteTableId">TargetRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#target_route_table_id Ec2TransitGatewayPolicyTableEntry#target_route_table_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.transitGatewayPolicyTableId">TransitGatewayPolicyTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#transit_gateway_policy_table_id Ec2TransitGatewayPolicyTableEntry#transit_gateway_policy_table_id}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.policyRule">PolicyRule</a></code> | <code>interface{}</code> | policy_rule block. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyRuleNumber`<sup>Required</sup> <a name="PolicyRuleNumber" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.policyRuleNumber"></a>

```go
PolicyRuleNumber *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#policy_rule_number Ec2TransitGatewayPolicyTableEntry#policy_rule_number}.

---

##### `TargetRouteTableId`<sup>Required</sup> <a name="TargetRouteTableId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.targetRouteTableId"></a>

```go
TargetRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#target_route_table_id Ec2TransitGatewayPolicyTableEntry#target_route_table_id}.

---

##### `TransitGatewayPolicyTableId`<sup>Required</sup> <a name="TransitGatewayPolicyTableId" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.transitGatewayPolicyTableId"></a>

```go
TransitGatewayPolicyTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#transit_gateway_policy_table_id Ec2TransitGatewayPolicyTableEntry#transit_gateway_policy_table_id}.

---

##### `PolicyRule`<sup>Optional</sup> <a name="PolicyRule" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.policyRule"></a>

```go
PolicyRule interface{}
```

- *Type:* interface{}

policy_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#policy_rule Ec2TransitGatewayPolicyTableEntry#policy_rule}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#region Ec2TransitGatewayPolicyTableEntry#region}

---

### Ec2TransitGatewayPolicyTableEntryPolicyRule <a name="Ec2TransitGatewayPolicyTableEntryPolicyRule" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

&ec2transitgatewaypolicytableentry.Ec2TransitGatewayPolicyTableEntryPolicyRule {
	DestinationCidrBlock: *string,
	DestinationPortRange: *string,
	Metadata: interface{},
	Protocol: *string,
	SourceCidrBlock: *string,
	SourcePortRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#destination_cidr_block Ec2TransitGatewayPolicyTableEntry#destination_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.destinationPortRange">DestinationPortRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#destination_port_range Ec2TransitGatewayPolicyTableEntry#destination_port_range}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.metadata">Metadata</a></code> | <code>interface{}</code> | metadata block. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#protocol Ec2TransitGatewayPolicyTableEntry#protocol}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#source_cidr_block Ec2TransitGatewayPolicyTableEntry#source_cidr_block}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.sourcePortRange">SourcePortRange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#source_port_range Ec2TransitGatewayPolicyTableEntry#source_port_range}. |

---

##### `DestinationCidrBlock`<sup>Optional</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.destinationCidrBlock"></a>

```go
DestinationCidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#destination_cidr_block Ec2TransitGatewayPolicyTableEntry#destination_cidr_block}.

---

##### `DestinationPortRange`<sup>Optional</sup> <a name="DestinationPortRange" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.destinationPortRange"></a>

```go
DestinationPortRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#destination_port_range Ec2TransitGatewayPolicyTableEntry#destination_port_range}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.metadata"></a>

```go
Metadata interface{}
```

- *Type:* interface{}

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#metadata Ec2TransitGatewayPolicyTableEntry#metadata}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#protocol Ec2TransitGatewayPolicyTableEntry#protocol}.

---

##### `SourceCidrBlock`<sup>Optional</sup> <a name="SourceCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.sourceCidrBlock"></a>

```go
SourceCidrBlock *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#source_cidr_block Ec2TransitGatewayPolicyTableEntry#source_cidr_block}.

---

##### `SourcePortRange`<sup>Optional</sup> <a name="SourcePortRange" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRule.property.sourcePortRange"></a>

```go
SourcePortRange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#source_port_range Ec2TransitGatewayPolicyTableEntry#source_port_range}.

---

### Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata <a name="Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

&ec2transitgatewaypolicytableentry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#key Ec2TransitGatewayPolicyTableEntry#key}. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#value Ec2TransitGatewayPolicyTableEntry#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#key Ec2TransitGatewayPolicyTableEntry#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadata.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/ec2_transit_gateway_policy_table_entry#value Ec2TransitGatewayPolicyTableEntry#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2TransitGatewayPolicyTableEntryPolicyRuleList <a name="Ec2TransitGatewayPolicyTableEntryPolicyRuleList" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

ec2transitgatewaypolicytableentry.NewEc2TransitGatewayPolicyTableEntryPolicyRuleList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2TransitGatewayPolicyTableEntryPolicyRuleList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.get"></a>

```go
func Get(index *f64) Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList <a name="Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

ec2transitgatewaypolicytableentry.NewEc2TransitGatewayPolicyTableEntryPolicyRuleMetadataList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.get"></a>

```go
func Get(index *f64) Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference <a name="Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

ec2transitgatewaypolicytableentry.NewEc2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference <a name="Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v25/ec2transitgatewaypolicytableentry"

ec2transitgatewaypolicytableentry.NewEc2TransitGatewayPolicyTableEntryPolicyRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.putMetadata">PutMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetDestinationCidrBlock">ResetDestinationCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetDestinationPortRange">ResetDestinationPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetSourceCidrBlock">ResetSourceCidrBlock</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetSourcePortRange">ResetSourcePortRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetadata` <a name="PutMetadata" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.putMetadata"></a>

```go
func PutMetadata(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.putMetadata.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestinationCidrBlock` <a name="ResetDestinationCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetDestinationCidrBlock"></a>

```go
func ResetDestinationCidrBlock()
```

##### `ResetDestinationPortRange` <a name="ResetDestinationPortRange" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetDestinationPortRange"></a>

```go
func ResetDestinationPortRange()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSourceCidrBlock` <a name="ResetSourceCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetSourceCidrBlock"></a>

```go
func ResetSourceCidrBlock()
```

##### `ResetSourcePortRange` <a name="ResetSourcePortRange" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.resetSourcePortRange"></a>

```go
func ResetSourcePortRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList">Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationCidrBlockInput">DestinationCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationPortRangeInput">DestinationPortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.metadataInput">MetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourceCidrBlockInput">SourceCidrBlockInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourcePortRangeInput">SourcePortRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationCidrBlock">DestinationCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationPortRange">DestinationPortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourceCidrBlock">SourceCidrBlock</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourcePortRange">SourcePortRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.metadata"></a>

```go
func Metadata() Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList
```

- *Type:* <a href="#@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList">Ec2TransitGatewayPolicyTableEntryPolicyRuleMetadataList</a>

---

##### `DestinationCidrBlockInput`<sup>Optional</sup> <a name="DestinationCidrBlockInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationCidrBlockInput"></a>

```go
func DestinationCidrBlockInput() *string
```

- *Type:* *string

---

##### `DestinationPortRangeInput`<sup>Optional</sup> <a name="DestinationPortRangeInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationPortRangeInput"></a>

```go
func DestinationPortRangeInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.metadataInput"></a>

```go
func MetadataInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SourceCidrBlockInput`<sup>Optional</sup> <a name="SourceCidrBlockInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourceCidrBlockInput"></a>

```go
func SourceCidrBlockInput() *string
```

- *Type:* *string

---

##### `SourcePortRangeInput`<sup>Optional</sup> <a name="SourcePortRangeInput" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourcePortRangeInput"></a>

```go
func SourcePortRangeInput() *string
```

- *Type:* *string

---

##### `DestinationCidrBlock`<sup>Required</sup> <a name="DestinationCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationCidrBlock"></a>

```go
func DestinationCidrBlock() *string
```

- *Type:* *string

---

##### `DestinationPortRange`<sup>Required</sup> <a name="DestinationPortRange" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.destinationPortRange"></a>

```go
func DestinationPortRange() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SourceCidrBlock`<sup>Required</sup> <a name="SourceCidrBlock" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourceCidrBlock"></a>

```go
func SourceCidrBlock() *string
```

- *Type:* *string

---

##### `SourcePortRange`<sup>Required</sup> <a name="SourcePortRange" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.sourcePortRange"></a>

```go
func SourcePortRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.ec2TransitGatewayPolicyTableEntry.Ec2TransitGatewayPolicyTableEntryPolicyRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



