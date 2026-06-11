# `serviceDiscoveryPrivateDnsNamespace` Submodule <a name="`serviceDiscoveryPrivateDnsNamespace` Submodule" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceDiscoveryPrivateDnsNamespace <a name="ServiceDiscoveryPrivateDnsNamespace" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace aws_service_discovery_private_dns_namespace}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServiceDiscoveryPrivateDnsNamespace(Construct Scope, string Id, ServiceDiscoveryPrivateDnsNamespaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig">ServiceDiscoveryPrivateDnsNamespaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig">ServiceDiscoveryPrivateDnsNamespaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTagsAll">ResetTagsAll</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTagsAll` <a name="ResetTagsAll" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.resetTagsAll"></a>

```csharp
private void ResetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServiceDiscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServiceDiscoveryPrivateDnsNamespace.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServiceDiscoveryPrivateDnsNamespace.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServiceDiscoveryPrivateDnsNamespace.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Aws;

ServiceDiscoveryPrivateDnsNamespace.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ServiceDiscoveryPrivateDnsNamespace resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceDiscoveryPrivateDnsNamespace to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceDiscoveryPrivateDnsNamespace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ServiceDiscoveryPrivateDnsNamespace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.arn">Arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.hostedZone">HostedZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAllInput">TagsAllInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpcInput">VpcInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpc">Vpc</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.arn"></a>

```csharp
public string Arn { get; }
```

- *Type:* string

---

##### `HostedZone`<sup>Required</sup> <a name="HostedZone" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.hostedZone"></a>

```csharp
public string HostedZone { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `TagsAllInput`<sup>Optional</sup> <a name="TagsAllInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAllInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAllInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpcInput"></a>

```csharp
public string VpcInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `TagsAll`<sup>Required</sup> <a name="TagsAll" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.vpc"></a>

```csharp
public string Vpc { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespace.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceDiscoveryPrivateDnsNamespaceConfig <a name="ServiceDiscoveryPrivateDnsNamespaceConfig" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Aws;

new ServiceDiscoveryPrivateDnsNamespaceConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Vpc,
    string Description = null,
    string Id = null,
    string Region = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null,
    System.Collections.Generic.IDictionary<string, string> TagsAll = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#name ServiceDiscoveryPrivateDnsNamespace#name}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.vpc">Vpc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#description ServiceDiscoveryPrivateDnsNamespace#description}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#id ServiceDiscoveryPrivateDnsNamespace#id}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.region">Region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#tags ServiceDiscoveryPrivateDnsNamespace#tags}. |
| <code><a href="#@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tagsAll">TagsAll</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#name ServiceDiscoveryPrivateDnsNamespace#name}.

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.vpc"></a>

```csharp
public string Vpc { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#vpc ServiceDiscoveryPrivateDnsNamespace#vpc}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#description ServiceDiscoveryPrivateDnsNamespace#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#id ServiceDiscoveryPrivateDnsNamespace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#region ServiceDiscoveryPrivateDnsNamespace#region}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#tags ServiceDiscoveryPrivateDnsNamespace#tags}.

---

##### `TagsAll`<sup>Optional</sup> <a name="TagsAll" id="@cdktn/provider-aws.serviceDiscoveryPrivateDnsNamespace.ServiceDiscoveryPrivateDnsNamespaceConfig.property.tagsAll"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsAll { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/service_discovery_private_dns_namespace#tags_all ServiceDiscoveryPrivateDnsNamespace#tags_all}.

---



