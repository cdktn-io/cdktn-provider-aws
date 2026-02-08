# `macie2CustomDataIdentifier` Submodule <a name="`macie2CustomDataIdentifier` Submodule" id="@cdktn/provider-aws.macie2CustomDataIdentifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Macie2CustomDataIdentifier <a name="Macie2CustomDataIdentifier" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier aws_macie2_custom_data_identifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/macie2customdataidentifier"

macie2customdataidentifier.NewMacie2CustomDataIdentifier(scope Construct, id *string, config Macie2CustomDataIdentifierConfig) Macie2CustomDataIdentifier
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig">Macie2CustomDataIdentifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig">Macie2CustomDataIdentifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords">ResetIgnoreWords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords">ResetKeywords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance">ResetMaximumMatchDistance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix">ResetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll">ResetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.putTimeouts"></a>

```go
func PutTimeouts(value Macie2CustomDataIdentifierTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreWords` <a name="ResetIgnoreWords" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetIgnoreWords"></a>

```go
func ResetIgnoreWords()
```

##### `ResetKeywords` <a name="ResetKeywords" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetKeywords"></a>

```go
func ResetKeywords()
```

##### `ResetMaximumMatchDistance` <a name="ResetMaximumMatchDistance" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetMaximumMatchDistance"></a>

```go
func ResetMaximumMatchDistance()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetName"></a>

```go
func ResetName()
```

##### `ResetNamePrefix` <a name="ResetNamePrefix" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetNamePrefix"></a>

```go
func ResetNamePrefix()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTagsAll"></a>

```go
func ResetTagsAll()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Macie2CustomDataIdentifier resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/macie2customdataidentifier"

macie2customdataidentifier.Macie2CustomDataIdentifier_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/macie2customdataidentifier"

macie2customdataidentifier.Macie2CustomDataIdentifier_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/macie2customdataidentifier"

macie2customdataidentifier.Macie2CustomDataIdentifier_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/macie2customdataidentifier"

macie2customdataidentifier.Macie2CustomDataIdentifier_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Macie2CustomDataIdentifier resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Macie2CustomDataIdentifier to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Macie2CustomDataIdentifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Macie2CustomDataIdentifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference">Macie2CustomDataIdentifierTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput">IgnoreWordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput">KeywordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput">MaximumMatchDistanceInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput">NamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput">TagsAllInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords">IgnoreWords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords">Keywords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance">MaximumMatchDistance</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.timeouts"></a>

```go
func Timeouts() Macie2CustomDataIdentifierTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference">Macie2CustomDataIdentifierTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreWordsInput`<sup>Optional</sup> <a name="IgnoreWordsInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWordsInput"></a>

```go
func IgnoreWordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `KeywordsInput`<sup>Optional</sup> <a name="KeywordsInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywordsInput"></a>

```go
func KeywordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumMatchDistanceInput`<sup>Optional</sup> <a name="MaximumMatchDistanceInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistanceInput"></a>

```go
func MaximumMatchDistanceInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamePrefixInput`<sup>Optional</sup> <a name="NamePrefixInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefixInput"></a>

```go
func NamePrefixInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAllInput"></a>

```go
func TagsAllInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreWords`<sup>Required</sup> <a name="IgnoreWords" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.ignoreWords"></a>

```go
func IgnoreWords() *[]*string
```

- *Type:* *[]*string

---

##### `Keywords`<sup>Required</sup> <a name="Keywords" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.keywords"></a>

```go
func Keywords() *[]*string
```

- *Type:* *[]*string

---

##### `MaximumMatchDistance`<sup>Required</sup> <a name="MaximumMatchDistance" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.maximumMatchDistance"></a>

```go
func MaximumMatchDistance() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tagsAll"></a>

```go
func TagsAll() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifier.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Macie2CustomDataIdentifierConfig <a name="Macie2CustomDataIdentifierConfig" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/macie2customdataidentifier"

&macie2customdataidentifier.Macie2CustomDataIdentifierConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Description: *string,
	Id: *string,
	IgnoreWords: *[]*string,
	Keywords: *[]*string,
	MaximumMatchDistance: *f64,
	Name: *string,
	NamePrefix: *string,
	Regex: *string,
	Region: *string,
	Tags: *map[string]*string,
	TagsAll: *map[string]*string,
	Timeouts: github.com/cdktn-io/cdktn-provider-aws-go/aws/v22.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords">IgnoreWords</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords">Keywords</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance">MaximumMatchDistance</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex">Regex</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.region">Region</a></code> | <code>*string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll">TagsAll</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#description Macie2CustomDataIdentifier#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#id Macie2CustomDataIdentifier#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreWords`<sup>Optional</sup> <a name="IgnoreWords" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.ignoreWords"></a>

```go
IgnoreWords *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#ignore_words Macie2CustomDataIdentifier#ignore_words}.

---

##### `Keywords`<sup>Optional</sup> <a name="Keywords" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.keywords"></a>

```go
Keywords *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#keywords Macie2CustomDataIdentifier#keywords}.

---

##### `MaximumMatchDistance`<sup>Optional</sup> <a name="MaximumMatchDistance" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.maximumMatchDistance"></a>

```go
MaximumMatchDistance *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#maximum_match_distance Macie2CustomDataIdentifier#maximum_match_distance}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#name Macie2CustomDataIdentifier#name}.

---

##### `NamePrefix`<sup>Optional</sup> <a name="NamePrefix" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.namePrefix"></a>

```go
NamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#name_prefix Macie2CustomDataIdentifier#name_prefix}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#regex Macie2CustomDataIdentifier#regex}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#region Macie2CustomDataIdentifier#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#tags Macie2CustomDataIdentifier#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.tagsAll"></a>

```go
TagsAll *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#tags_all Macie2CustomDataIdentifier#tags_all}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierConfig.property.timeouts"></a>

```go
Timeouts Macie2CustomDataIdentifierTimeouts
```

- *Type:* <a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts">Macie2CustomDataIdentifierTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#timeouts Macie2CustomDataIdentifier#timeouts}

---

### Macie2CustomDataIdentifierTimeouts <a name="Macie2CustomDataIdentifierTimeouts" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/macie2customdataidentifier"

&macie2customdataidentifier.Macie2CustomDataIdentifierTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#create Macie2CustomDataIdentifier#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/macie2_custom_data_identifier#create Macie2CustomDataIdentifier#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### Macie2CustomDataIdentifierTimeoutsOutputReference <a name="Macie2CustomDataIdentifierTimeoutsOutputReference" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-aws-go/aws/v22/macie2customdataidentifier"

macie2customdataidentifier.NewMacie2CustomDataIdentifierTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Macie2CustomDataIdentifierTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-aws.macie2CustomDataIdentifier.Macie2CustomDataIdentifierTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



