# `bedrockagentcoreOauth2CredentialProvider` Submodule <a name="`bedrockagentcoreOauth2CredentialProvider` Submodule" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreOauth2CredentialProvider <a name="BedrockagentcoreOauth2CredentialProvider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider aws_bedrockagentcore_oauth2_credential_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProvider(Construct Scope, string Id, BedrockagentcoreOauth2CredentialProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig">BedrockagentcoreOauth2CredentialProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig">BedrockagentcoreOauth2CredentialProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.putOauth2ProviderConfig">PutOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetOauth2ProviderConfig">ResetOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOauth2ProviderConfig` <a name="PutOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.putOauth2ProviderConfig"></a>

```csharp
private void PutOauth2ProviderConfig(IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.putOauth2ProviderConfig.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>[]

---

##### `ResetOauth2ProviderConfig` <a name="ResetOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetOauth2ProviderConfig"></a>

```csharp
private void ResetOauth2ProviderConfig()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreOauth2CredentialProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreOauth2CredentialProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreOauth2CredentialProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreOauth2CredentialProvider.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

BedrockagentcoreOauth2CredentialProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BedrockagentcoreOauth2CredentialProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreOauth2CredentialProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreOauth2CredentialProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreOauth2CredentialProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.clientSecretArn">ClientSecretArn</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList">BedrockagentcoreOauth2CredentialProviderClientSecretArnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderArn">CredentialProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.oauth2ProviderConfig">Oauth2ProviderConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderVendorInput">CredentialProviderVendorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.oauth2ProviderConfigInput">Oauth2ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderVendor">CredentialProviderVendor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `ClientSecretArn`<sup>Required</sup> <a name="ClientSecretArn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.clientSecretArn"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderClientSecretArnList ClientSecretArn { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList">BedrockagentcoreOauth2CredentialProviderClientSecretArnList</a>

---

##### `CredentialProviderArn`<sup>Required</sup> <a name="CredentialProviderArn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderArn"></a>

```csharp
public string CredentialProviderArn { get; }
```

- *Type:* string

---

##### `Oauth2ProviderConfig`<sup>Required</sup> <a name="Oauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.oauth2ProviderConfig"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList Oauth2ProviderConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList</a>

---

##### `CredentialProviderVendorInput`<sup>Optional</sup> <a name="CredentialProviderVendorInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderVendorInput"></a>

```csharp
public string CredentialProviderVendorInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Oauth2ProviderConfigInput`<sup>Optional</sup> <a name="Oauth2ProviderConfigInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.oauth2ProviderConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig[] Oauth2ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `CredentialProviderVendor`<sup>Required</sup> <a name="CredentialProviderVendor" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.credentialProviderVendor"></a>

```csharp
public string CredentialProviderVendor { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreOauth2CredentialProviderClientSecretArn <a name="BedrockagentcoreOauth2CredentialProviderClientSecretArn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderClientSecretArn {

};
```


### BedrockagentcoreOauth2CredentialProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string CredentialProviderVendor,
    string Name,
    IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig[] Oauth2ProviderConfig = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.credentialProviderVendor">CredentialProviderVendor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#credential_provider_vendor BedrockagentcoreOauth2CredentialProvider#credential_provider_vendor}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#name BedrockagentcoreOauth2CredentialProvider#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.oauth2ProviderConfig">Oauth2ProviderConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>[]</code> | oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `CredentialProviderVendor`<sup>Required</sup> <a name="CredentialProviderVendor" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.credentialProviderVendor"></a>

```csharp
public string CredentialProviderVendor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#credential_provider_vendor BedrockagentcoreOauth2CredentialProvider#credential_provider_vendor}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#name BedrockagentcoreOauth2CredentialProvider#name}.

---

##### `Oauth2ProviderConfig`<sup>Optional</sup> <a name="Oauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.oauth2ProviderConfig"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig[] Oauth2ProviderConfig { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>[]

oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#oauth2_provider_config}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#region BedrockagentcoreOauth2CredentialProvider#region}

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig {
    IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig[] CustomOauth2ProviderConfig = null,
    IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig[] GithubOauth2ProviderConfig = null,
    IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig[] GoogleOauth2ProviderConfig = null,
    IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig[] MicrosoftOauth2ProviderConfig = null,
    IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig[] SalesforceOauth2ProviderConfig = null,
    IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig[] SlackOauth2ProviderConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.customOauth2ProviderConfig">CustomOauth2ProviderConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>[]</code> | custom_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.githubOauth2ProviderConfig">GithubOauth2ProviderConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>[]</code> | github_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.googleOauth2ProviderConfig">GoogleOauth2ProviderConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>[]</code> | google_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.microsoftOauth2ProviderConfig">MicrosoftOauth2ProviderConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>[]</code> | microsoft_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.salesforceOauth2ProviderConfig">SalesforceOauth2ProviderConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>[]</code> | salesforce_oauth2_provider_config block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.slackOauth2ProviderConfig">SlackOauth2ProviderConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>[]</code> | slack_oauth2_provider_config block. |

---

##### `CustomOauth2ProviderConfig`<sup>Optional</sup> <a name="CustomOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.customOauth2ProviderConfig"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig[] CustomOauth2ProviderConfig { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>[]

custom_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#custom_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#custom_oauth2_provider_config}

---

##### `GithubOauth2ProviderConfig`<sup>Optional</sup> <a name="GithubOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.githubOauth2ProviderConfig"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig[] GithubOauth2ProviderConfig { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>[]

github_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#github_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#github_oauth2_provider_config}

---

##### `GoogleOauth2ProviderConfig`<sup>Optional</sup> <a name="GoogleOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.googleOauth2ProviderConfig"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig[] GoogleOauth2ProviderConfig { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>[]

google_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#google_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#google_oauth2_provider_config}

---

##### `MicrosoftOauth2ProviderConfig`<sup>Optional</sup> <a name="MicrosoftOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.microsoftOauth2ProviderConfig"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig[] MicrosoftOauth2ProviderConfig { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>[]

microsoft_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#microsoft_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#microsoft_oauth2_provider_config}

---

##### `SalesforceOauth2ProviderConfig`<sup>Optional</sup> <a name="SalesforceOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.salesforceOauth2ProviderConfig"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig[] SalesforceOauth2ProviderConfig { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>[]

salesforce_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#salesforce_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#salesforce_oauth2_provider_config}

---

##### `SlackOauth2ProviderConfig`<sup>Optional</sup> <a name="SlackOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig.property.slackOauth2ProviderConfig"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig[] SlackOauth2ProviderConfig { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>[]

slack_oauth2_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#slack_oauth2_provider_config BedrockagentcoreOauth2CredentialProvider#slack_oauth2_provider_config}

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig {
    double ClientCredentialsWoVersion = null,
    string ClientId = null,
    string ClientIdWo = null,
    string ClientSecret = null,
    string ClientSecretWo = null,
    IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery[] OauthDiscovery = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.oauthDiscovery">OauthDiscovery</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>[]</code> | oauth_discovery block. |

---

##### `ClientCredentialsWoVersion`<sup>Optional</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `ClientIdWo`<sup>Optional</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

##### `OauthDiscovery`<sup>Optional</sup> <a name="OauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig.property.oauthDiscovery"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery[] OauthDiscovery { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>[]

oauth_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#oauth_discovery BedrockagentcoreOauth2CredentialProvider#oauth_discovery}

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery {
    IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata[] AuthorizationServerMetadata = null,
    string DiscoveryUrl = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.property.authorizationServerMetadata">AuthorizationServerMetadata</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>[]</code> | authorization_server_metadata block. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#discovery_url BedrockagentcoreOauth2CredentialProvider#discovery_url}. |

---

##### `AuthorizationServerMetadata`<sup>Optional</sup> <a name="AuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.property.authorizationServerMetadata"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata[] AuthorizationServerMetadata { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>[]

authorization_server_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#authorization_server_metadata BedrockagentcoreOauth2CredentialProvider#authorization_server_metadata}

---

##### `DiscoveryUrl`<sup>Optional</sup> <a name="DiscoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#discovery_url BedrockagentcoreOauth2CredentialProvider#discovery_url}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata {
    string AuthorizationEndpoint,
    string Issuer,
    string TokenEndpoint,
    string[] ResponseTypes = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#authorization_endpoint BedrockagentcoreOauth2CredentialProvider#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.issuer">Issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#issuer BedrockagentcoreOauth2CredentialProvider#issuer}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#token_endpoint BedrockagentcoreOauth2CredentialProvider#token_endpoint}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#response_types BedrockagentcoreOauth2CredentialProvider#response_types}. |

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#authorization_endpoint BedrockagentcoreOauth2CredentialProvider#authorization_endpoint}.

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.issuer"></a>

```csharp
public string Issuer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#issuer BedrockagentcoreOauth2CredentialProvider#issuer}.

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#token_endpoint BedrockagentcoreOauth2CredentialProvider#token_endpoint}.

---

##### `ResponseTypes`<sup>Optional</sup> <a name="ResponseTypes" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#response_types BedrockagentcoreOauth2CredentialProvider#response_types}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig {
    double ClientCredentialsWoVersion = null,
    string ClientId = null,
    string ClientIdWo = null,
    string ClientSecret = null,
    string ClientSecretWo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `ClientCredentialsWoVersion`<sup>Optional</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `ClientIdWo`<sup>Optional</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery {

};
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata {

};
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig {
    double ClientCredentialsWoVersion = null,
    string ClientId = null,
    string ClientIdWo = null,
    string ClientSecret = null,
    string ClientSecretWo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `ClientCredentialsWoVersion`<sup>Optional</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `ClientIdWo`<sup>Optional</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery {

};
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata {

};
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig {
    double ClientCredentialsWoVersion = null,
    string ClientId = null,
    string ClientIdWo = null,
    string ClientSecret = null,
    string ClientSecretWo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `ClientCredentialsWoVersion`<sup>Optional</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `ClientIdWo`<sup>Optional</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery {

};
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata {

};
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig {
    double ClientCredentialsWoVersion = null,
    string ClientId = null,
    string ClientIdWo = null,
    string ClientSecret = null,
    string ClientSecretWo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `ClientCredentialsWoVersion`<sup>Optional</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `ClientIdWo`<sup>Optional</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery {

};
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata {

};
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig {
    double ClientCredentialsWoVersion = null,
    string ClientId = null,
    string ClientIdWo = null,
    string ClientSecret = null,
    string ClientSecretWo = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientId">ClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}. |

---

##### `ClientCredentialsWoVersion`<sup>Optional</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_credentials_wo_version BedrockagentcoreOauth2CredentialProvider#client_credentials_wo_version}.

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id BedrockagentcoreOauth2CredentialProvider#client_id}.

---

##### `ClientIdWo`<sup>Optional</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_id_wo BedrockagentcoreOauth2CredentialProvider#client_id_wo}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret BedrockagentcoreOauth2CredentialProvider#client_secret}.

---

##### `ClientSecretWo`<sup>Optional</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.21.0/docs/resources/bedrockagentcore_oauth2_credential_provider#client_secret_wo BedrockagentcoreOauth2CredentialProvider#client_secret_wo}.

---

### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery {

};
```


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata {

};
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreOauth2CredentialProviderClientSecretArnList <a name="BedrockagentcoreOauth2CredentialProviderClientSecretArnList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderClientSecretArnList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference <a name="BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.secretArn">SecretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArn">BedrockagentcoreOauth2CredentialProviderClientSecretArn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.secretArn"></a>

```csharp
public string SecretArn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArnOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderClientSecretArn InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderClientSecretArn">BedrockagentcoreOauth2CredentialProviderClientSecretArn</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>[]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>[]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resetResponseTypes">ResetResponseTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResponseTypes` <a name="ResetResponseTypes" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resetResponseTypes"></a>

```csharp
private void ResetResponseTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuerInput">IssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypesInput">ResponseTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpointInput"></a>

```csharp
public string AuthorizationEndpointInput { get; }
```

- *Type:* string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuerInput"></a>

```csharp
public string IssuerInput { get; }
```

- *Type:* string

---

##### `ResponseTypesInput`<sup>Optional</sup> <a name="ResponseTypesInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypesInput"></a>

```csharp
public string[] ResponseTypesInput { get; }
```

- *Type:* string[]

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>[]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.putAuthorizationServerMetadata">PutAuthorizationServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resetAuthorizationServerMetadata">ResetAuthorizationServerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resetDiscoveryUrl">ResetDiscoveryUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizationServerMetadata` <a name="PutAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.putAuthorizationServerMetadata"></a>

```csharp
private void PutAuthorizationServerMetadata(IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.putAuthorizationServerMetadata.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>[]

---

##### `ResetAuthorizationServerMetadata` <a name="ResetAuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resetAuthorizationServerMetadata"></a>

```csharp
private void ResetAuthorizationServerMetadata()
```

##### `ResetDiscoveryUrl` <a name="ResetDiscoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.resetDiscoveryUrl"></a>

```csharp
private void ResetDiscoveryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">AuthorizationServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadataInput">AuthorizationServerMetadataInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationServerMetadata`<sup>Required</sup> <a name="AuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList AuthorizationServerMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `AuthorizationServerMetadataInput`<sup>Optional</sup> <a name="AuthorizationServerMetadataInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadataInput"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata[] AuthorizationServerMetadataInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>[]

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrlInput"></a>

```csharp
public string DiscoveryUrlInput { get; }
```

- *Type:* string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.putOauthDiscovery">PutOauthDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">ResetClientCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientIdWo">ResetClientIdWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetOauthDiscovery">ResetOauthDiscovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthDiscovery` <a name="PutOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.putOauthDiscovery"></a>

```csharp
private void PutOauthDiscovery(IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.putOauthDiscovery.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>[]

---

##### `ResetClientCredentialsWoVersion` <a name="ResetClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```csharp
private void ResetClientCredentialsWoVersion()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientIdWo` <a name="ResetClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```csharp
private void ResetClientIdWo()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```csharp
private void ResetClientSecretWo()
```

##### `ResetOauthDiscovery` <a name="ResetOauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.resetOauthDiscovery"></a>

```csharp
private void ResetOauthDiscovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.oauthDiscovery">OauthDiscovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">ClientCredentialsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdWoInput">ClientIdWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.oauthDiscoveryInput">OauthDiscoveryInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthDiscovery`<sup>Required</sup> <a name="OauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList OauthDiscovery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `ClientCredentialsWoVersionInput`<sup>Optional</sup> <a name="ClientCredentialsWoVersionInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```csharp
public double ClientCredentialsWoVersionInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientIdWoInput`<sup>Optional</sup> <a name="ClientIdWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```csharp
public string ClientIdWoInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```csharp
public string ClientSecretWoInput { get; }
```

- *Type:* string

---

##### `OauthDiscoveryInput`<sup>Optional</sup> <a name="OauthDiscoveryInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.oauthDiscoveryInput"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery[] OauthDiscoveryInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOauthDiscovery</a>[]

---

##### `ClientCredentialsWoVersion`<sup>Required</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientIdWo`<sup>Required</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretWo`<sup>Required</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>[]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">AuthorizationServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationServerMetadata`<sup>Required</sup> <a name="AuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList AuthorizationServerMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">ResetClientCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientIdWo">ResetClientIdWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCredentialsWoVersion` <a name="ResetClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```csharp
private void ResetClientCredentialsWoVersion()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientIdWo` <a name="ResetClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```csharp
private void ResetClientIdWo()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```csharp
private void ResetClientSecretWo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.oauthDiscovery">OauthDiscovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">ClientCredentialsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdWoInput">ClientIdWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthDiscovery`<sup>Required</sup> <a name="OauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList OauthDiscovery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `ClientCredentialsWoVersionInput`<sup>Optional</sup> <a name="ClientCredentialsWoVersionInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```csharp
public double ClientCredentialsWoVersionInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientIdWoInput`<sup>Optional</sup> <a name="ClientIdWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```csharp
public string ClientIdWoInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```csharp
public string ClientSecretWoInput { get; }
```

- *Type:* string

---

##### `ClientCredentialsWoVersion`<sup>Required</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientIdWo`<sup>Required</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretWo`<sup>Required</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>[]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">AuthorizationServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationServerMetadata`<sup>Required</sup> <a name="AuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList AuthorizationServerMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">ResetClientCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientIdWo">ResetClientIdWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCredentialsWoVersion` <a name="ResetClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```csharp
private void ResetClientCredentialsWoVersion()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientIdWo` <a name="ResetClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```csharp
private void ResetClientIdWo()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```csharp
private void ResetClientSecretWo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.oauthDiscovery">OauthDiscovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">ClientCredentialsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdWoInput">ClientIdWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthDiscovery`<sup>Required</sup> <a name="OauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList OauthDiscovery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `ClientCredentialsWoVersionInput`<sup>Optional</sup> <a name="ClientCredentialsWoVersionInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```csharp
public double ClientCredentialsWoVersionInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientIdWoInput`<sup>Optional</sup> <a name="ClientIdWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```csharp
public string ClientIdWoInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```csharp
public string ClientSecretWoInput { get; }
```

- *Type:* string

---

##### `ClientCredentialsWoVersion`<sup>Required</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientIdWo`<sup>Required</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretWo`<sup>Required</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>[]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>[]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">AuthorizationServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationServerMetadata`<sup>Required</sup> <a name="AuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList AuthorizationServerMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">ResetClientCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientIdWo">ResetClientIdWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCredentialsWoVersion` <a name="ResetClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```csharp
private void ResetClientCredentialsWoVersion()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientIdWo` <a name="ResetClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```csharp
private void ResetClientIdWo()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```csharp
private void ResetClientSecretWo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.oauthDiscovery">OauthDiscovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">ClientCredentialsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdWoInput">ClientIdWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthDiscovery`<sup>Required</sup> <a name="OauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList OauthDiscovery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `ClientCredentialsWoVersionInput`<sup>Optional</sup> <a name="ClientCredentialsWoVersionInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```csharp
public double ClientCredentialsWoVersionInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientIdWoInput`<sup>Optional</sup> <a name="ClientIdWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```csharp
public string ClientIdWoInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```csharp
public string ClientSecretWoInput { get; }
```

- *Type:* string

---

##### `ClientCredentialsWoVersion`<sup>Required</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientIdWo`<sup>Required</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretWo`<sup>Required</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putCustomOauth2ProviderConfig">PutCustomOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGithubOauth2ProviderConfig">PutGithubOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGoogleOauth2ProviderConfig">PutGoogleOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putMicrosoftOauth2ProviderConfig">PutMicrosoftOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSalesforceOauth2ProviderConfig">PutSalesforceOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSlackOauth2ProviderConfig">PutSlackOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetCustomOauth2ProviderConfig">ResetCustomOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetGithubOauth2ProviderConfig">ResetGithubOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetGoogleOauth2ProviderConfig">ResetGoogleOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetMicrosoftOauth2ProviderConfig">ResetMicrosoftOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetSalesforceOauth2ProviderConfig">ResetSalesforceOauth2ProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetSlackOauth2ProviderConfig">ResetSlackOauth2ProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomOauth2ProviderConfig` <a name="PutCustomOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putCustomOauth2ProviderConfig"></a>

```csharp
private void PutCustomOauth2ProviderConfig(IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putCustomOauth2ProviderConfig.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>[]

---

##### `PutGithubOauth2ProviderConfig` <a name="PutGithubOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGithubOauth2ProviderConfig"></a>

```csharp
private void PutGithubOauth2ProviderConfig(IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGithubOauth2ProviderConfig.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>[]

---

##### `PutGoogleOauth2ProviderConfig` <a name="PutGoogleOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGoogleOauth2ProviderConfig"></a>

```csharp
private void PutGoogleOauth2ProviderConfig(IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putGoogleOauth2ProviderConfig.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>[]

---

##### `PutMicrosoftOauth2ProviderConfig` <a name="PutMicrosoftOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putMicrosoftOauth2ProviderConfig"></a>

```csharp
private void PutMicrosoftOauth2ProviderConfig(IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putMicrosoftOauth2ProviderConfig.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>[]

---

##### `PutSalesforceOauth2ProviderConfig` <a name="PutSalesforceOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSalesforceOauth2ProviderConfig"></a>

```csharp
private void PutSalesforceOauth2ProviderConfig(IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSalesforceOauth2ProviderConfig.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>[]

---

##### `PutSlackOauth2ProviderConfig` <a name="PutSlackOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSlackOauth2ProviderConfig"></a>

```csharp
private void PutSlackOauth2ProviderConfig(IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.putSlackOauth2ProviderConfig.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>[]

---

##### `ResetCustomOauth2ProviderConfig` <a name="ResetCustomOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetCustomOauth2ProviderConfig"></a>

```csharp
private void ResetCustomOauth2ProviderConfig()
```

##### `ResetGithubOauth2ProviderConfig` <a name="ResetGithubOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetGithubOauth2ProviderConfig"></a>

```csharp
private void ResetGithubOauth2ProviderConfig()
```

##### `ResetGoogleOauth2ProviderConfig` <a name="ResetGoogleOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetGoogleOauth2ProviderConfig"></a>

```csharp
private void ResetGoogleOauth2ProviderConfig()
```

##### `ResetMicrosoftOauth2ProviderConfig` <a name="ResetMicrosoftOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetMicrosoftOauth2ProviderConfig"></a>

```csharp
private void ResetMicrosoftOauth2ProviderConfig()
```

##### `ResetSalesforceOauth2ProviderConfig` <a name="ResetSalesforceOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetSalesforceOauth2ProviderConfig"></a>

```csharp
private void ResetSalesforceOauth2ProviderConfig()
```

##### `ResetSlackOauth2ProviderConfig` <a name="ResetSlackOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.resetSlackOauth2ProviderConfig"></a>

```csharp
private void ResetSlackOauth2ProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.customOauth2ProviderConfig">CustomOauth2ProviderConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.githubOauth2ProviderConfig">GithubOauth2ProviderConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.googleOauth2ProviderConfig">GoogleOauth2ProviderConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.microsoftOauth2ProviderConfig">MicrosoftOauth2ProviderConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.salesforceOauth2ProviderConfig">SalesforceOauth2ProviderConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.slackOauth2ProviderConfig">SlackOauth2ProviderConfig</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.customOauth2ProviderConfigInput">CustomOauth2ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.githubOauth2ProviderConfigInput">GithubOauth2ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.googleOauth2ProviderConfigInput">GoogleOauth2ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.microsoftOauth2ProviderConfigInput">MicrosoftOauth2ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.salesforceOauth2ProviderConfigInput">SalesforceOauth2ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.slackOauth2ProviderConfigInput">SlackOauth2ProviderConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomOauth2ProviderConfig`<sup>Required</sup> <a name="CustomOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.customOauth2ProviderConfig"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList CustomOauth2ProviderConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfigList</a>

---

##### `GithubOauth2ProviderConfig`<sup>Required</sup> <a name="GithubOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.githubOauth2ProviderConfig"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList GithubOauth2ProviderConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfigList</a>

---

##### `GoogleOauth2ProviderConfig`<sup>Required</sup> <a name="GoogleOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.googleOauth2ProviderConfig"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList GoogleOauth2ProviderConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfigList</a>

---

##### `MicrosoftOauth2ProviderConfig`<sup>Required</sup> <a name="MicrosoftOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.microsoftOauth2ProviderConfig"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList MicrosoftOauth2ProviderConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfigList</a>

---

##### `SalesforceOauth2ProviderConfig`<sup>Required</sup> <a name="SalesforceOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.salesforceOauth2ProviderConfig"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList SalesforceOauth2ProviderConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList</a>

---

##### `SlackOauth2ProviderConfig`<sup>Required</sup> <a name="SlackOauth2ProviderConfig" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.slackOauth2ProviderConfig"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList SlackOauth2ProviderConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList</a>

---

##### `CustomOauth2ProviderConfigInput`<sup>Optional</sup> <a name="CustomOauth2ProviderConfigInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.customOauth2ProviderConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig[] CustomOauth2ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigCustomOauth2ProviderConfig</a>[]

---

##### `GithubOauth2ProviderConfigInput`<sup>Optional</sup> <a name="GithubOauth2ProviderConfigInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.githubOauth2ProviderConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig[] GithubOauth2ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGithubOauth2ProviderConfig</a>[]

---

##### `GoogleOauth2ProviderConfigInput`<sup>Optional</sup> <a name="GoogleOauth2ProviderConfigInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.googleOauth2ProviderConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig[] GoogleOauth2ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigGoogleOauth2ProviderConfig</a>[]

---

##### `MicrosoftOauth2ProviderConfigInput`<sup>Optional</sup> <a name="MicrosoftOauth2ProviderConfigInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.microsoftOauth2ProviderConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig[] MicrosoftOauth2ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigMicrosoftOauth2ProviderConfig</a>[]

---

##### `SalesforceOauth2ProviderConfigInput`<sup>Optional</sup> <a name="SalesforceOauth2ProviderConfigInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.salesforceOauth2ProviderConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig[] SalesforceOauth2ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>[]

---

##### `SlackOauth2ProviderConfigInput`<sup>Optional</sup> <a name="SlackOauth2ProviderConfigInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.slackOauth2ProviderConfigInput"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig[] SlackOauth2ProviderConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>[]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">AuthorizationServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationServerMetadata`<sup>Required</sup> <a name="AuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList AuthorizationServerMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">ResetClientCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientIdWo">ResetClientIdWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCredentialsWoVersion` <a name="ResetClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```csharp
private void ResetClientCredentialsWoVersion()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientIdWo` <a name="ResetClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```csharp
private void ResetClientIdWo()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```csharp
private void ResetClientSecretWo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.oauthDiscovery">OauthDiscovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">ClientCredentialsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdWoInput">ClientIdWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthDiscovery`<sup>Required</sup> <a name="OauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList OauthDiscovery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `ClientCredentialsWoVersionInput`<sup>Optional</sup> <a name="ClientCredentialsWoVersionInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```csharp
public double ClientCredentialsWoVersionInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientIdWoInput`<sup>Optional</sup> <a name="ClientIdWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```csharp
public string ClientIdWoInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```csharp
public string ClientSecretWoInput { get; }
```

- *Type:* string

---

##### `ClientCredentialsWoVersion`<sup>Required</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientIdWo`<sup>Required</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretWo`<sup>Required</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSalesforceOauth2ProviderConfig</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigList.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>[]

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer">Issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes">ResponseTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.authorizationEndpoint"></a>

```csharp
public string AuthorizationEndpoint { get; }
```

- *Type:* string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.issuer"></a>

```csharp
public string Issuer { get; }
```

- *Type:* string

---

##### `ResponseTypes`<sup>Required</sup> <a name="ResponseTypes" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.responseTypes"></a>

```csharp
public string[] ResponseTypes { get; }
```

- *Type:* string[]

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadata</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.get"></a>

```csharp
private BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata">AuthorizationServerMetadata</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizationServerMetadata`<sup>Required</sup> <a name="AuthorizationServerMetadata" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.authorizationServerMetadata"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList AuthorizationServerMetadata { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryAuthorizationServerMetadataList</a>

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.discoveryUrl"></a>

```csharp
public string DiscoveryUrl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryOutputReference.property.internalValue"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscovery</a>

---


### BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference <a name="BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion">ResetClientCredentialsWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientIdWo">ResetClientIdWo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientSecretWo">ResetClientSecretWo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientCredentialsWoVersion` <a name="ResetClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientCredentialsWoVersion"></a>

```csharp
private void ResetClientCredentialsWoVersion()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientIdWo` <a name="ResetClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientIdWo"></a>

```csharp
private void ResetClientIdWo()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetClientSecretWo` <a name="ResetClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.resetClientSecretWo"></a>

```csharp
private void ResetClientSecretWo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.oauthDiscovery">OauthDiscovery</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput">ClientCredentialsWoVersionInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdWoInput">ClientIdWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretWoInput">ClientSecretWoInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion">ClientCredentialsWoVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdWo">ClientIdWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretWo">ClientSecretWo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthDiscovery`<sup>Required</sup> <a name="OauthDiscovery" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.oauthDiscovery"></a>

```csharp
public BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList OauthDiscovery { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOauthDiscoveryList</a>

---

##### `ClientCredentialsWoVersionInput`<sup>Optional</sup> <a name="ClientCredentialsWoVersionInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersionInput"></a>

```csharp
public double ClientCredentialsWoVersionInput { get; }
```

- *Type:* double

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientIdWoInput`<sup>Optional</sup> <a name="ClientIdWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdWoInput"></a>

```csharp
public string ClientIdWoInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ClientSecretWoInput`<sup>Optional</sup> <a name="ClientSecretWoInput" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretWoInput"></a>

```csharp
public string ClientSecretWoInput { get; }
```

- *Type:* string

---

##### `ClientCredentialsWoVersion`<sup>Required</sup> <a name="ClientCredentialsWoVersion" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientCredentialsWoVersion"></a>

```csharp
public double ClientCredentialsWoVersion { get; }
```

- *Type:* double

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientIdWo`<sup>Required</sup> <a name="ClientIdWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientIdWo"></a>

```csharp
public string ClientIdWo { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `ClientSecretWo`<sup>Required</sup> <a name="ClientSecretWo" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.clientSecretWo"></a>

```csharp
public string ClientSecretWo { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.bedrockagentcoreOauth2CredentialProvider.BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig">BedrockagentcoreOauth2CredentialProviderOauth2ProviderConfigSlackOauth2ProviderConfig</a>

---



