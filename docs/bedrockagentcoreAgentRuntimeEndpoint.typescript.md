# `bedrockagentcoreAgentRuntimeEndpoint` Submodule <a name="`bedrockagentcoreAgentRuntimeEndpoint` Submodule" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreAgentRuntimeEndpoint <a name="BedrockagentcoreAgentRuntimeEndpoint" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint aws_bedrockagentcore_agent_runtime_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer"></a>

```typescript
import { bedrockagentcoreAgentRuntimeEndpoint } from '@cdktf/provider-aws'

new bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint(scope: Construct, id: string, config: BedrockagentcoreAgentRuntimeEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig">BedrockagentcoreAgentRuntimeEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig">BedrockagentcoreAgentRuntimeEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetAgentRuntimeVersion">resetAgentRuntimeVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockagentcoreAgentRuntimeEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---

##### `resetAgentRuntimeVersion` <a name="resetAgentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetAgentRuntimeVersion"></a>

```typescript
public resetAgentRuntimeVersion(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a BedrockagentcoreAgentRuntimeEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct"></a>

```typescript
import { bedrockagentcoreAgentRuntimeEndpoint } from '@cdktf/provider-aws'

bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement"></a>

```typescript
import { bedrockagentcoreAgentRuntimeEndpoint } from '@cdktf/provider-aws'

bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource"></a>

```typescript
import { bedrockagentcoreAgentRuntimeEndpoint } from '@cdktf/provider-aws'

bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreAgentRuntimeEndpoint } from '@cdktf/provider-aws'

bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a BedrockagentcoreAgentRuntimeEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreAgentRuntimeEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreAgentRuntimeEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreAgentRuntimeEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeArn">agentRuntimeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeEndpointArn">agentRuntimeEndpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference">BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeIdInput">agentRuntimeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersionInput">agentRuntimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeId">agentRuntimeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersion">agentRuntimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentRuntimeArn`<sup>Required</sup> <a name="agentRuntimeArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeArn"></a>

```typescript
public readonly agentRuntimeArn: string;
```

- *Type:* string

---

##### `agentRuntimeEndpointArn`<sup>Required</sup> <a name="agentRuntimeEndpointArn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeEndpointArn"></a>

```typescript
public readonly agentRuntimeEndpointArn: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference">BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference</a>

---

##### `agentRuntimeIdInput`<sup>Optional</sup> <a name="agentRuntimeIdInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeIdInput"></a>

```typescript
public readonly agentRuntimeIdInput: string;
```

- *Type:* string

---

##### `agentRuntimeVersionInput`<sup>Optional</sup> <a name="agentRuntimeVersionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersionInput"></a>

```typescript
public readonly agentRuntimeVersionInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockagentcoreAgentRuntimeEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeId"></a>

```typescript
public readonly agentRuntimeId: string;
```

- *Type:* string

---

##### `agentRuntimeVersion`<sup>Required</sup> <a name="agentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.agentRuntimeVersion"></a>

```typescript
public readonly agentRuntimeVersion: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreAgentRuntimeEndpointConfig <a name="BedrockagentcoreAgentRuntimeEndpointConfig" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.Initializer"></a>

```typescript
import { bedrockagentcoreAgentRuntimeEndpoint } from '@cdktf/provider-aws'

const bedrockagentcoreAgentRuntimeEndpointConfig: bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeId">agentRuntimeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeVersion">agentRuntimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentRuntimeId`<sup>Required</sup> <a name="agentRuntimeId" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeId"></a>

```typescript
public readonly agentRuntimeId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_id BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#name BedrockagentcoreAgentRuntimeEndpoint#name}.

---

##### `agentRuntimeVersion`<sup>Optional</sup> <a name="agentRuntimeVersion" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.agentRuntimeVersion"></a>

```typescript
public readonly agentRuntimeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#agent_runtime_version BedrockagentcoreAgentRuntimeEndpoint#agent_runtime_version}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#description BedrockagentcoreAgentRuntimeEndpoint#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#region BedrockagentcoreAgentRuntimeEndpoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#tags BedrockagentcoreAgentRuntimeEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreAgentRuntimeEndpointTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#timeouts BedrockagentcoreAgentRuntimeEndpoint#timeouts}

---

### BedrockagentcoreAgentRuntimeEndpointTimeouts <a name="BedrockagentcoreAgentRuntimeEndpointTimeouts" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.Initializer"></a>

```typescript
import { bedrockagentcoreAgentRuntimeEndpoint } from '@cdktf/provider-aws'

const bedrockagentcoreAgentRuntimeEndpointTimeouts: bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#create BedrockagentcoreAgentRuntimeEndpoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#delete BedrockagentcoreAgentRuntimeEndpoint#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.23.0/docs/resources/bedrockagentcore_agent_runtime_endpoint#update BedrockagentcoreAgentRuntimeEndpoint#update}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference <a name="BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreAgentRuntimeEndpoint } from '@cdktf/provider-aws'

new bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreAgentRuntimeEndpointTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.bedrockagentcoreAgentRuntimeEndpoint.BedrockagentcoreAgentRuntimeEndpointTimeouts">BedrockagentcoreAgentRuntimeEndpointTimeouts</a>

---



