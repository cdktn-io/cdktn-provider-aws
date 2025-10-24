# `transferWebApp` Submodule <a name="`transferWebApp` Submodule" id="@cdktf/provider-aws.transferWebApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWebApp <a name="TransferWebApp" id="@cdktf/provider-aws.transferWebApp.TransferWebApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app aws_transfer_web_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebApp(Construct Scope, string Id, TransferWebAppConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig">TransferWebAppConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig">TransferWebAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.putIdentityProviderDetails">PutIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.putWebAppUnits">PutWebAppUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetAccessEndpoint">ResetAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetIdentityProviderDetails">ResetIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy">ResetWebAppEndpointPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetWebAppUnits">ResetWebAppUnits</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIdentityProviderDetails` <a name="PutIdentityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.putIdentityProviderDetails"></a>

```csharp
private void PutIdentityProviderDetails(IResolvable|TransferWebAppIdentityProviderDetails[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.putIdentityProviderDetails.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

---

##### `PutWebAppUnits` <a name="PutWebAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.putWebAppUnits"></a>

```csharp
private void PutWebAppUnits(IResolvable|TransferWebAppWebAppUnits[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.putWebAppUnits.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

---

##### `ResetAccessEndpoint` <a name="ResetAccessEndpoint" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetAccessEndpoint"></a>

```csharp
private void ResetAccessEndpoint()
```

##### `ResetIdentityProviderDetails` <a name="ResetIdentityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetIdentityProviderDetails"></a>

```csharp
private void ResetIdentityProviderDetails()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetWebAppEndpointPolicy` <a name="ResetWebAppEndpointPolicy" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy"></a>

```csharp
private void ResetWebAppEndpointPolicy()
```

##### `ResetWebAppUnits` <a name="ResetWebAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetWebAppUnits"></a>

```csharp
private void ResetWebAppUnits()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TransferWebApp resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferWebApp.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferWebApp.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferWebApp.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

TransferWebApp.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a TransferWebApp resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferWebApp to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferWebApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the TransferWebApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetails">IdentityProviderDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList">TransferWebAppIdentityProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tagsAll">TagsAll</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppId">WebAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppUnits">WebAppUnits</a></code> | <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList">TransferWebAppWebAppUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.accessEndpointInput">AccessEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetailsInput">IdentityProviderDetailsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput">WebAppEndpointPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppUnitsInput">WebAppUnitsInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.accessEndpoint">AccessEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicy">WebAppEndpointPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `IdentityProviderDetails`<sup>Required</sup> <a name="IdentityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetails"></a>

```csharp
public TransferWebAppIdentityProviderDetailsList IdentityProviderDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList">TransferWebAppIdentityProviderDetailsList</a>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tagsAll"></a>

```csharp
public StringMap TagsAll { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `WebAppId`<sup>Required</sup> <a name="WebAppId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppId"></a>

```csharp
public string WebAppId { get; }
```

- *Type:* string

---

##### `WebAppUnits`<sup>Required</sup> <a name="WebAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppUnits"></a>

```csharp
public TransferWebAppWebAppUnitsList WebAppUnits { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList">TransferWebAppWebAppUnitsList</a>

---

##### `AccessEndpointInput`<sup>Optional</sup> <a name="AccessEndpointInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.accessEndpointInput"></a>

```csharp
public string AccessEndpointInput { get; }
```

- *Type:* string

---

##### `IdentityProviderDetailsInput`<sup>Optional</sup> <a name="IdentityProviderDetailsInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetailsInput"></a>

```csharp
public IResolvable|TransferWebAppIdentityProviderDetails[] IdentityProviderDetailsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebAppEndpointPolicyInput`<sup>Optional</sup> <a name="WebAppEndpointPolicyInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput"></a>

```csharp
public string WebAppEndpointPolicyInput { get; }
```

- *Type:* string

---

##### `WebAppUnitsInput`<sup>Optional</sup> <a name="WebAppUnitsInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppUnitsInput"></a>

```csharp
public IResolvable|TransferWebAppWebAppUnits[] WebAppUnitsInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

---

##### `AccessEndpoint`<sup>Required</sup> <a name="AccessEndpoint" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.accessEndpoint"></a>

```csharp
public string AccessEndpoint { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `WebAppEndpointPolicy`<sup>Required</sup> <a name="WebAppEndpointPolicy" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicy"></a>

```csharp
public string WebAppEndpointPolicy { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWebAppConfig <a name="TransferWebAppConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccessEndpoint = null,
    IResolvable|TransferWebAppIdentityProviderDetails[] IdentityProviderDetails = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    string WebAppEndpointPolicy = null,
    IResolvable|TransferWebAppWebAppUnits[] WebAppUnits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.accessEndpoint">AccessEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.identityProviderDetails">IdentityProviderDetails</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]</code> | identity_provider_details block. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy">WebAppEndpointPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppUnits">WebAppUnits</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `AccessEndpoint`<sup>Optional</sup> <a name="AccessEndpoint" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.accessEndpoint"></a>

```csharp
public string AccessEndpoint { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}.

---

##### `IdentityProviderDetails`<sup>Optional</sup> <a name="IdentityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.identityProviderDetails"></a>

```csharp
public IResolvable|TransferWebAppIdentityProviderDetails[] IdentityProviderDetails { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

identity_provider_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#identity_provider_details TransferWebApp#identity_provider_details}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#region TransferWebApp#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}.

---

##### `WebAppEndpointPolicy`<sup>Optional</sup> <a name="WebAppEndpointPolicy" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy"></a>

```csharp
public string WebAppEndpointPolicy { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}.

---

##### `WebAppUnits`<sup>Optional</sup> <a name="WebAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppUnits"></a>

```csharp
public IResolvable|TransferWebAppWebAppUnits[] WebAppUnits { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}.

---

### TransferWebAppIdentityProviderDetails <a name="TransferWebAppIdentityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppIdentityProviderDetails {
    IResolvable|TransferWebAppIdentityProviderDetailsIdentityCenterConfig[] IdentityCenterConfig = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails.property.identityCenterConfig">IdentityCenterConfig</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]</code> | identity_center_config block. |

---

##### `IdentityCenterConfig`<sup>Optional</sup> <a name="IdentityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails.property.identityCenterConfig"></a>

```csharp
public IResolvable|TransferWebAppIdentityProviderDetailsIdentityCenterConfig[] IdentityCenterConfig { get; set; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

identity_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#identity_center_config TransferWebApp#identity_center_config}

---

### TransferWebAppIdentityProviderDetailsIdentityCenterConfig <a name="TransferWebAppIdentityProviderDetailsIdentityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppIdentityProviderDetailsIdentityCenterConfig {
    string InstanceArn = null,
    string Role = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.instanceArn">InstanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#role TransferWebApp#role}. |

---

##### `InstanceArn`<sup>Optional</sup> <a name="InstanceArn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.instanceArn"></a>

```csharp
public string InstanceArn { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}.

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#role TransferWebApp#role}.

---

### TransferWebAppWebAppUnits <a name="TransferWebAppWebAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppWebAppUnits {
    double Provisioned = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits.property.provisioned">Provisioned</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}. |

---

##### `Provisioned`<sup>Optional</sup> <a name="Provisioned" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits.property.provisioned"></a>

```csharp
public double Provisioned { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.18.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWebAppIdentityProviderDetailsIdentityCenterConfigList <a name="TransferWebAppIdentityProviderDetailsIdentityCenterConfigList" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppIdentityProviderDetailsIdentityCenterConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.get"></a>

```csharp
private TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.internalValue"></a>

```csharp
public IResolvable|TransferWebAppIdentityProviderDetailsIdentityCenterConfig[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

---


### TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference <a name="TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetInstanceArn">ResetInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetRole">ResetRole</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceArn` <a name="ResetInstanceArn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetInstanceArn"></a>

```csharp
private void ResetInstanceArn()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetRole"></a>

```csharp
private void ResetRole()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.applicationArn">ApplicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArnInput">InstanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArn">InstanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationArn`<sup>Required</sup> <a name="ApplicationArn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.applicationArn"></a>

```csharp
public string ApplicationArn { get; }
```

- *Type:* string

---

##### `InstanceArnInput`<sup>Optional</sup> <a name="InstanceArnInput" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArnInput"></a>

```csharp
public string InstanceArnInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `InstanceArn`<sup>Required</sup> <a name="InstanceArn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArn"></a>

```csharp
public string InstanceArn { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferWebAppIdentityProviderDetailsIdentityCenterConfig InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>

---


### TransferWebAppIdentityProviderDetailsList <a name="TransferWebAppIdentityProviderDetailsList" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppIdentityProviderDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.get"></a>

```csharp
private TransferWebAppIdentityProviderDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.internalValue"></a>

```csharp
public IResolvable|TransferWebAppIdentityProviderDetails[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

---


### TransferWebAppIdentityProviderDetailsOutputReference <a name="TransferWebAppIdentityProviderDetailsOutputReference" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppIdentityProviderDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.putIdentityCenterConfig">PutIdentityCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetIdentityCenterConfig">ResetIdentityCenterConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdentityCenterConfig` <a name="PutIdentityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.putIdentityCenterConfig"></a>

```csharp
private void PutIdentityCenterConfig(IResolvable|TransferWebAppIdentityProviderDetailsIdentityCenterConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.putIdentityCenterConfig.parameter.value"></a>

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

---

##### `ResetIdentityCenterConfig` <a name="ResetIdentityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetIdentityCenterConfig"></a>

```csharp
private void ResetIdentityCenterConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfig">IdentityCenterConfig</a></code> | <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList">TransferWebAppIdentityProviderDetailsIdentityCenterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfigInput">IdentityCenterConfigInput</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IdentityCenterConfig`<sup>Required</sup> <a name="IdentityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfig"></a>

```csharp
public TransferWebAppIdentityProviderDetailsIdentityCenterConfigList IdentityCenterConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList">TransferWebAppIdentityProviderDetailsIdentityCenterConfigList</a>

---

##### `IdentityCenterConfigInput`<sup>Optional</sup> <a name="IdentityCenterConfigInput" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfigInput"></a>

```csharp
public IResolvable|TransferWebAppIdentityProviderDetailsIdentityCenterConfig[] IdentityCenterConfigInput { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferWebAppIdentityProviderDetails InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

---


### TransferWebAppWebAppUnitsList <a name="TransferWebAppWebAppUnitsList" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppWebAppUnitsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.get"></a>

```csharp
private TransferWebAppWebAppUnitsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.internalValue"></a>

```csharp
public IResolvable|TransferWebAppWebAppUnits[] InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

---


### TransferWebAppWebAppUnitsOutputReference <a name="TransferWebAppWebAppUnitsOutputReference" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Aws;

new TransferWebAppWebAppUnitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned">ResetProvisioned</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProvisioned` <a name="ResetProvisioned" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned"></a>

```csharp
private void ResetProvisioned()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput">ProvisionedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned">Provisioned</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue">InternalValue</a></code> | <code>HashiCorp.Cdktf.IResolvable\|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProvisionedInput`<sup>Optional</sup> <a name="ProvisionedInput" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput"></a>

```csharp
public double ProvisionedInput { get; }
```

- *Type:* double

---

##### `Provisioned`<sup>Required</sup> <a name="Provisioned" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned"></a>

```csharp
public double Provisioned { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|TransferWebAppWebAppUnits InternalValue { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable|<a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

---



