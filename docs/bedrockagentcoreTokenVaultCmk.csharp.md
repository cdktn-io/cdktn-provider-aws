# `bedrockagentcoreTokenVaultCmk` Submodule <a name="`bedrockagentcoreTokenVaultCmk` Submodule" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreTokenVaultCmk <a name="BedrockagentcoreTokenVaultCmk" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk aws_bedrockagentcore_token_vault_cmk}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreTokenVaultCmk(Construct Scope, string Id, BedrockagentcoreTokenVaultCmkConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig">BedrockagentcoreTokenVaultCmkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig">BedrockagentcoreTokenVaultCmkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.putKmsConfiguration">PutKmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetKmsConfiguration">ResetKmsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetTokenVaultId">ResetTokenVaultId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKmsConfiguration` <a name="PutKmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.putKmsConfiguration"></a>

```csharp
private void PutKmsConfiguration(IResolvable|BedrockagentcoreTokenVaultCmkKmsConfiguration[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.putKmsConfiguration.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]

---

##### `ResetKmsConfiguration` <a name="ResetKmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetKmsConfiguration"></a>

```csharp
private void ResetKmsConfiguration()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTokenVaultId` <a name="ResetTokenVaultId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.resetTokenVaultId"></a>

```csharp
private void ResetTokenVaultId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreTokenVaultCmk resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreTokenVaultCmk.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreTokenVaultCmk.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreTokenVaultCmk.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreTokenVaultCmk.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockagentcoreTokenVaultCmk resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreTokenVaultCmk to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreTokenVaultCmk that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreTokenVaultCmk to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.kmsConfiguration">KmsConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList">BedrockagentcoreTokenVaultCmkKmsConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.kmsConfigurationInput">KmsConfigurationInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tokenVaultIdInput">TokenVaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tokenVaultId">TokenVaultId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `KmsConfiguration`<sup>Required</sup> <a name="KmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.kmsConfiguration"></a>

```csharp
public BedrockagentcoreTokenVaultCmkKmsConfigurationList KmsConfiguration { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList">BedrockagentcoreTokenVaultCmkKmsConfigurationList</a>

---

##### `KmsConfigurationInput`<sup>Optional</sup> <a name="KmsConfigurationInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.kmsConfigurationInput"></a>

```csharp
public IResolvable|BedrockagentcoreTokenVaultCmkKmsConfiguration[] KmsConfigurationInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TokenVaultIdInput`<sup>Optional</sup> <a name="TokenVaultIdInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tokenVaultIdInput"></a>

```csharp
public string TokenVaultIdInput { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TokenVaultId`<sup>Required</sup> <a name="TokenVaultId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tokenVaultId"></a>

```csharp
public string TokenVaultId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmk.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreTokenVaultCmkConfig <a name="BedrockagentcoreTokenVaultCmkConfig" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreTokenVaultCmkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    IResolvable|BedrockagentcoreTokenVaultCmkKmsConfiguration[] KmsConfiguration = null,
    string Region = null,
    string TokenVaultId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.kmsConfiguration">KmsConfiguration</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]</code> | kms_configuration block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.tokenVaultId">TokenVaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#token_vault_id BedrockagentcoreTokenVaultCmk#token_vault_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `KmsConfiguration`<sup>Optional</sup> <a name="KmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.kmsConfiguration"></a>

```csharp
public IResolvable|BedrockagentcoreTokenVaultCmkKmsConfiguration[] KmsConfiguration { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]

kms_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#kms_configuration BedrockagentcoreTokenVaultCmk#kms_configuration}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#region BedrockagentcoreTokenVaultCmk#region}

---

##### `TokenVaultId`<sup>Optional</sup> <a name="TokenVaultId" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkConfig.property.tokenVaultId"></a>

```csharp
public string TokenVaultId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#token_vault_id BedrockagentcoreTokenVaultCmk#token_vault_id}.

---

### BedrockagentcoreTokenVaultCmkKmsConfiguration <a name="BedrockagentcoreTokenVaultCmkKmsConfiguration" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreTokenVaultCmkKmsConfiguration {
    string KeyType,
    string KmsKeyArn = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.property.keyType">KeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#key_type BedrockagentcoreTokenVaultCmk#key_type}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#kms_key_arn BedrockagentcoreTokenVaultCmk#kms_key_arn}. |

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.property.keyType"></a>

```csharp
public string KeyType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#key_type BedrockagentcoreTokenVaultCmk#key_type}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.19.0/docs/resources/bedrockagentcore_token_vault_cmk#kms_key_arn BedrockagentcoreTokenVaultCmk#kms_key_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreTokenVaultCmkKmsConfigurationList <a name="BedrockagentcoreTokenVaultCmkKmsConfigurationList" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreTokenVaultCmkKmsConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.get"></a>

```csharp
private BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreTokenVaultCmkKmsConfiguration[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>[]

---


### BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference <a name="BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.resetKmsKeyArn"></a>

```csharp
private void ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.keyTypeInput">KeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.keyType">KeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyTypeInput`<sup>Optional</sup> <a name="KeyTypeInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.keyTypeInput"></a>

```csharp
public string KeyTypeInput { get; }
```

- *Type:* string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.kmsKeyArnInput"></a>

```csharp
public string KmsKeyArnInput { get; }
```

- *Type:* string

---

##### `KeyType`<sup>Required</sup> <a name="KeyType" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.keyType"></a>

```csharp
public string KeyType { get; }
```

- *Type:* string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.kmsKeyArn"></a>

```csharp
public string KmsKeyArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfigurationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreTokenVaultCmkKmsConfiguration InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreTokenVaultCmk.BedrockagentcoreTokenVaultCmkKmsConfiguration">BedrockagentcoreTokenVaultCmkKmsConfiguration</a>

---



