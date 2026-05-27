# `securityhubConnectorV2` Submodule <a name="`securityhubConnectorV2` Submodule" id="@cdktn/provider-aws.securityhubConnectorV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConnectorV2 <a name="SecurityhubConnectorV2" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2 aws_securityhub_connector_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2(scope Construct, id *string, config SecurityhubConnectorV2Config) SecurityhubConnectorV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config">SecurityhubConnectorV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider">PutConnectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider">ResetConnectorProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectorProvider` <a name="PutConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider"></a>

```go
func PutConnectorProvider(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.putConnectorProvider.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConnectorProvider` <a name="ResetConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetConnectorProvider"></a>

```go
func ResetConnectorProvider()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.SecurityhubConnectorV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.SecurityhubConnectorV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.SecurityhubConnectorV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.SecurityhubConnectorV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityhubConnectorV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityhubConnectorV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityhubConnectorV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConnectorV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId">ConnectorId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider">ConnectorProvider</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health">Health</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll">TagsAll</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput">ConnectorProviderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConnectorId`<sup>Required</sup> <a name="ConnectorId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorId"></a>

```go
func ConnectorId() *string
```

- *Type:* *string

---

##### `ConnectorProvider`<sup>Required</sup> <a name="ConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProvider"></a>

```go
func ConnectorProvider() SecurityhubConnectorV2ConnectorProviderList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList">SecurityhubConnectorV2ConnectorProviderList</a>

---

##### `Health`<sup>Required</sup> <a name="Health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.health"></a>

```go
func Health() SecurityhubConnectorV2HealthList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList">SecurityhubConnectorV2HealthList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsAll"></a>

```go
func TagsAll() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ConnectorProviderInput`<sup>Optional</sup> <a name="ConnectorProviderInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.connectorProviderInput"></a>

```go
func ConnectorProviderInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConnectorV2Config <a name="SecurityhubConnectorV2Config" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	ConnectorProvider: interface{},
	Description: *string,
	KmsKeyArn: *string,
	Region: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider">ConnectorProvider</a></code> | <code>interface{}</code> | connector_provider block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#name SecurityhubConnectorV2#name}.

---

##### `ConnectorProvider`<sup>Optional</sup> <a name="ConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.connectorProvider"></a>

```go
ConnectorProvider interface{}
```

- *Type:* interface{}

connector_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#connector_provider SecurityhubConnectorV2#connector_provider}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#description SecurityhubConnectorV2#description}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#kms_key_arn SecurityhubConnectorV2#kms_key_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#region SecurityhubConnectorV2#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#tags SecurityhubConnectorV2#tags}.

---

### SecurityhubConnectorV2ConnectorProvider <a name="SecurityhubConnectorV2ConnectorProvider" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2ConnectorProvider {
	JiraCloud: interface{},
	ServiceNow: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud">JiraCloud</a></code> | <code>interface{}</code> | jira_cloud block. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow">ServiceNow</a></code> | <code>interface{}</code> | service_now block. |

---

##### `JiraCloud`<sup>Optional</sup> <a name="JiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.jiraCloud"></a>

```go
JiraCloud interface{}
```

- *Type:* interface{}

jira_cloud block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#jira_cloud SecurityhubConnectorV2#jira_cloud}

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProvider.property.serviceNow"></a>

```go
ServiceNow interface{}
```

- *Type:* interface{}

service_now block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#service_now SecurityhubConnectorV2#service_now}

---

### SecurityhubConnectorV2ConnectorProviderJiraCloud <a name="SecurityhubConnectorV2ConnectorProviderJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2ConnectorProviderJiraCloud {
	ProjectKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey">ProjectKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}. |

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloud.property.projectKey"></a>

```go
ProjectKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#project_key SecurityhubConnectorV2#project_key}.

---

### SecurityhubConnectorV2ConnectorProviderServiceNow <a name="SecurityhubConnectorV2ConnectorProviderServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2ConnectorProviderServiceNow {
	InstanceName: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName">InstanceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn">SecretArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}. |

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.instanceName"></a>

```go
InstanceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#instance_name SecurityhubConnectorV2#instance_name}.

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNow.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.46.0/docs/resources/securityhub_connector_v2#secret_arn SecurityhubConnectorV2#secret_arn}.

---

### SecurityhubConnectorV2Health <a name="SecurityhubConnectorV2Health" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

&securityhubconnectorv2.SecurityhubConnectorV2Health {

}
```


## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConnectorV2ConnectorProviderJiraCloudList <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ConnectorProviderJiraCloudList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityhubConnectorV2ConnectorProviderJiraCloudList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get"></a>

```go
func Get(index *f64) SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference <a name="SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus">AuthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl">AuthUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId">CloudId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput">ProjectKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey">ProjectKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthStatus`<sup>Required</sup> <a name="AuthStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authStatus"></a>

```go
func AuthStatus() *string
```

- *Type:* *string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.authUrl"></a>

```go
func AuthUrl() *string
```

- *Type:* *string

---

##### `CloudId`<sup>Required</sup> <a name="CloudId" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.cloudId"></a>

```go
func CloudId() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `ProjectKeyInput`<sup>Optional</sup> <a name="ProjectKeyInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKeyInput"></a>

```go
func ProjectKeyInput() *string
```

- *Type:* *string

---

##### `ProjectKey`<sup>Required</sup> <a name="ProjectKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.projectKey"></a>

```go
func ProjectKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2ConnectorProviderList <a name="SecurityhubConnectorV2ConnectorProviderList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ConnectorProviderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityhubConnectorV2ConnectorProviderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get"></a>

```go
func Get(index *f64) SecurityhubConnectorV2ConnectorProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2ConnectorProviderOutputReference <a name="SecurityhubConnectorV2ConnectorProviderOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ConnectorProviderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityhubConnectorV2ConnectorProviderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud">PutJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud">ResetJiraCloud</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJiraCloud` <a name="PutJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud"></a>

```go
func PutJiraCloud(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putJiraCloud.parameter.value"></a>

- *Type:* interface{}

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow"></a>

```go
func PutServiceNow(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.putServiceNow.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetJiraCloud` <a name="ResetJiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetJiraCloud"></a>

```go
func ResetJiraCloud()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.resetServiceNow"></a>

```go
func ResetServiceNow()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud">JiraCloud</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput">JiraCloudInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JiraCloud`<sup>Required</sup> <a name="JiraCloud" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloud"></a>

```go
func JiraCloud() SecurityhubConnectorV2ConnectorProviderJiraCloudList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderJiraCloudList">SecurityhubConnectorV2ConnectorProviderJiraCloudList</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNow"></a>

```go
func ServiceNow() SecurityhubConnectorV2ConnectorProviderServiceNowList
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList">SecurityhubConnectorV2ConnectorProviderServiceNowList</a>

---

##### `JiraCloudInput`<sup>Optional</sup> <a name="JiraCloudInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.jiraCloudInput"></a>

```go
func JiraCloudInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.serviceNowInput"></a>

```go
func ServiceNowInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2ConnectorProviderServiceNowList <a name="SecurityhubConnectorV2ConnectorProviderServiceNowList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ConnectorProviderServiceNowList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityhubConnectorV2ConnectorProviderServiceNowList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get"></a>

```go
func Get(index *f64) SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference <a name="SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2ConnectorProviderServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus">AuthStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName">InstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthStatus`<sup>Required</sup> <a name="AuthStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.authStatus"></a>

```go
func AuthStatus() *string
```

- *Type:* *string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceNameInput"></a>

```go
func InstanceNameInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.instanceName"></a>

```go
func InstanceName() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2ConnectorProviderServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConnectorV2HealthList <a name="SecurityhubConnectorV2HealthList" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2HealthList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityhubConnectorV2HealthList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get"></a>

```go
func Get(index *f64) SecurityhubConnectorV2HealthOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### SecurityhubConnectorV2HealthOutputReference <a name="SecurityhubConnectorV2HealthOutputReference" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v24/securityhubconnectorv2"

securityhubconnectorv2.NewSecurityhubConnectorV2HealthOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityhubConnectorV2HealthOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus">ConnectorStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt">LastCheckedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectorStatus`<sup>Required</sup> <a name="ConnectorStatus" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.connectorStatus"></a>

```go
func ConnectorStatus() *string
```

- *Type:* *string

---

##### `LastCheckedAt`<sup>Required</sup> <a name="LastCheckedAt" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.lastCheckedAt"></a>

```go
func LastCheckedAt() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2HealthOutputReference.property.internalValue"></a>

```go
func InternalValue() SecurityhubConnectorV2Health
```

- *Type:* <a href="#@cdktn/provider-aws.securityhubConnectorV2.SecurityhubConnectorV2Health">SecurityhubConnectorV2Health</a>

---



