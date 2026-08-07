# `bedrockagentcoreGateway` Submodule <a name="`bedrockagentcoreGateway` Submodule" id="@cdktn/provider-aws.bedrockagentcoreGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGateway <a name="BedrockagentcoreGateway" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway aws_bedrockagentcore_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGateway(scope: Construct, id: string, config: BedrockagentcoreGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig">BedrockagentcoreGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig">BedrockagentcoreGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration">putAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putInterceptorConfiguration">putInterceptorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putPolicyEngineConfiguration">putPolicyEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration">putProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetAuthorizerConfiguration">resetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetExceptionLevel">resetExceptionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetInterceptorConfiguration">resetInterceptorConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetPolicyEngineConfiguration">resetPolicyEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolConfiguration">resetProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizerConfiguration` <a name="putAuthorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration"></a>

```typescript
public putAuthorizerConfiguration(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>[]

---

##### `putInterceptorConfiguration` <a name="putInterceptorConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putInterceptorConfiguration"></a>

```typescript
public putInterceptorConfiguration(value: IResolvable | BedrockagentcoreGatewayInterceptorConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putInterceptorConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration">BedrockagentcoreGatewayInterceptorConfiguration</a>[]

---

##### `putPolicyEngineConfiguration` <a name="putPolicyEngineConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putPolicyEngineConfiguration"></a>

```typescript
public putPolicyEngineConfiguration(value: IResolvable | BedrockagentcoreGatewayPolicyEngineConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putPolicyEngineConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>[]

---

##### `putProtocolConfiguration` <a name="putProtocolConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration"></a>

```typescript
public putProtocolConfiguration(value: IResolvable | BedrockagentcoreGatewayProtocolConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putTimeouts"></a>

```typescript
public putTimeouts(value: BedrockagentcoreGatewayTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a>

---

##### `resetAuthorizerConfiguration` <a name="resetAuthorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetAuthorizerConfiguration"></a>

```typescript
public resetAuthorizerConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExceptionLevel` <a name="resetExceptionLevel" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetExceptionLevel"></a>

```typescript
public resetExceptionLevel(): void
```

##### `resetInterceptorConfiguration` <a name="resetInterceptorConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetInterceptorConfiguration"></a>

```typescript
public resetInterceptorConfiguration(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetPolicyEngineConfiguration` <a name="resetPolicyEngineConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetPolicyEngineConfiguration"></a>

```typescript
public resetPolicyEngineConfiguration(): void
```

##### `resetProtocolConfiguration` <a name="resetProtocolConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolConfiguration"></a>

```typescript
public resetProtocolConfiguration(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList">BedrockagentcoreGatewayAuthorizerConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayUrl">gatewayUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfiguration">interceptorConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList">BedrockagentcoreGatewayInterceptorConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfiguration">policyEngineConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList">BedrockagentcoreGatewayPolicyEngineConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList">BedrockagentcoreGatewayProtocolConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference">BedrockagentcoreGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.workloadIdentityDetails">workloadIdentityDetails</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList">BedrockagentcoreGatewayWorkloadIdentityDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfigurationInput">authorizerConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerTypeInput">authorizerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevelInput">exceptionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurationInput">interceptorConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration">BedrockagentcoreGatewayInterceptorConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfigurationInput">policyEngineConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfigurationInput">protocolConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerType">authorizerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevel">exceptionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizerConfiguration`<sup>Required</sup> <a name="authorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfiguration"></a>

```typescript
public readonly authorizerConfiguration: BedrockagentcoreGatewayAuthorizerConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList">BedrockagentcoreGatewayAuthorizerConfigurationList</a>

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `gatewayUrl`<sup>Required</sup> <a name="gatewayUrl" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayUrl"></a>

```typescript
public readonly gatewayUrl: string;
```

- *Type:* string

---

##### `interceptorConfiguration`<sup>Required</sup> <a name="interceptorConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfiguration"></a>

```typescript
public readonly interceptorConfiguration: BedrockagentcoreGatewayInterceptorConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList">BedrockagentcoreGatewayInterceptorConfigurationList</a>

---

##### `policyEngineConfiguration`<sup>Required</sup> <a name="policyEngineConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfiguration"></a>

```typescript
public readonly policyEngineConfiguration: BedrockagentcoreGatewayPolicyEngineConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList">BedrockagentcoreGatewayPolicyEngineConfigurationList</a>

---

##### `protocolConfiguration`<sup>Required</sup> <a name="protocolConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfiguration"></a>

```typescript
public readonly protocolConfiguration: BedrockagentcoreGatewayProtocolConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList">BedrockagentcoreGatewayProtocolConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreGatewayTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference">BedrockagentcoreGatewayTimeoutsOutputReference</a>

---

##### `workloadIdentityDetails`<sup>Required</sup> <a name="workloadIdentityDetails" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.workloadIdentityDetails"></a>

```typescript
public readonly workloadIdentityDetails: BedrockagentcoreGatewayWorkloadIdentityDetailsList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList">BedrockagentcoreGatewayWorkloadIdentityDetailsList</a>

---

##### `authorizerConfigurationInput`<sup>Optional</sup> <a name="authorizerConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfigurationInput"></a>

```typescript
public readonly authorizerConfigurationInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>[]

---

##### `authorizerTypeInput`<sup>Optional</sup> <a name="authorizerTypeInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerTypeInput"></a>

```typescript
public readonly authorizerTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exceptionLevelInput`<sup>Optional</sup> <a name="exceptionLevelInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevelInput"></a>

```typescript
public readonly exceptionLevelInput: string;
```

- *Type:* string

---

##### `interceptorConfigurationInput`<sup>Optional</sup> <a name="interceptorConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurationInput"></a>

```typescript
public readonly interceptorConfigurationInput: IResolvable | BedrockagentcoreGatewayInterceptorConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration">BedrockagentcoreGatewayInterceptorConfiguration</a>[]

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyEngineConfigurationInput`<sup>Optional</sup> <a name="policyEngineConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfigurationInput"></a>

```typescript
public readonly policyEngineConfigurationInput: IResolvable | BedrockagentcoreGatewayPolicyEngineConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>[]

---

##### `protocolConfigurationInput`<sup>Optional</sup> <a name="protocolConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfigurationInput"></a>

```typescript
public readonly protocolConfigurationInput: IResolvable | BedrockagentcoreGatewayProtocolConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>[]

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | BedrockagentcoreGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a>

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerType"></a>

```typescript
public readonly authorizerType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exceptionLevel`<sup>Required</sup> <a name="exceptionLevel" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevel"></a>

```typescript
public readonly exceptionLevel: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayAuthorizerConfiguration <a name="BedrockagentcoreGatewayAuthorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>[]</code> | custom_jwt_authorizer block. |

---

##### `customJwtAuthorizer`<sup>Optional</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```typescript
public readonly customJwtAuthorizer: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>[]

custom_jwt_authorizer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#custom_jwt_authorizer BedrockagentcoreGateway#custom_jwt_authorizer}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">allowedAudience</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">allowedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#allowed_scopes BedrockagentcoreGateway#allowed_scopes}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedWorkloadConfiguration">allowedWorkloadConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>[]</code> | allowed_workload_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.customClaim">customClaim</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]</code> | custom_claim block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpoint">privateEndpoint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>[]</code> | private_endpoint block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpointOverrides">privateEndpointOverrides</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]</code> | private_endpoint_overrides block. |

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}.

---

##### `allowedAudience`<sup>Optional</sup> <a name="allowedAudience" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```typescript
public readonly allowedAudience: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}.

---

##### `allowedClients`<sup>Optional</sup> <a name="allowedClients" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```typescript
public readonly allowedClients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}.

---

##### `allowedScopes`<sup>Optional</sup> <a name="allowedScopes" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#allowed_scopes BedrockagentcoreGateway#allowed_scopes}.

---

##### `allowedWorkloadConfiguration`<sup>Optional</sup> <a name="allowedWorkloadConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedWorkloadConfiguration"></a>

```typescript
public readonly allowedWorkloadConfiguration: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>[]

allowed_workload_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#allowed_workload_configuration BedrockagentcoreGateway#allowed_workload_configuration}

---

##### `customClaim`<sup>Optional</sup> <a name="customClaim" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.customClaim"></a>

```typescript
public readonly customClaim: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]

custom_claim block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#custom_claim BedrockagentcoreGateway#custom_claim}

---

##### `privateEndpoint`<sup>Optional</sup> <a name="privateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>[]

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#private_endpoint BedrockagentcoreGateway#private_endpoint}

---

##### `privateEndpointOverrides`<sup>Optional</sup> <a name="privateEndpointOverrides" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.privateEndpointOverrides"></a>

```typescript
public readonly privateEndpointOverrides: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]

private_endpoint_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#private_endpoint_overrides BedrockagentcoreGateway#private_endpoint_overrides}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.hostingEnvironment">hostingEnvironment</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment</a>[]</code> | hosting_environment block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.workloadIdentities">workloadIdentities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#workload_identities BedrockagentcoreGateway#workload_identities}. |

---

##### `hostingEnvironment`<sup>Optional</sup> <a name="hostingEnvironment" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.hostingEnvironment"></a>

```typescript
public readonly hostingEnvironment: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment</a>[]

hosting_environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#hosting_environment BedrockagentcoreGateway#hosting_environment}

---

##### `workloadIdentities`<sup>Optional</sup> <a name="workloadIdentities" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration.property.workloadIdentities"></a>

```typescript
public readonly workloadIdentities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#workload_identities BedrockagentcoreGateway#workload_identities}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_name BedrockagentcoreGateway#inbound_token_claim_name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_value_type BedrockagentcoreGateway#inbound_token_claim_value_type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]</code> | authorizing_claim_match_value block. |

---

##### `inboundTokenClaimName`<sup>Required</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimName"></a>

```typescript
public readonly inboundTokenClaimName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_name BedrockagentcoreGateway#inbound_token_claim_name}.

---

##### `inboundTokenClaimValueType`<sup>Required</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.inboundTokenClaimValueType"></a>

```typescript
public readonly inboundTokenClaimValueType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_value_type BedrockagentcoreGateway#inbound_token_claim_value_type}.

---

##### `authorizingClaimMatchValue`<sup>Optional</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim.property.authorizingClaimMatchValue"></a>

```typescript
public readonly authorizingClaimMatchValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]

authorizing_claim_match_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#authorizing_claim_match_value BedrockagentcoreGateway#authorizing_claim_match_value}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchOperator">claimMatchOperator</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#claim_match_operator BedrockagentcoreGateway#claim_match_operator}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchValue">claimMatchValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]</code> | claim_match_value block. |

---

##### `claimMatchOperator`<sup>Required</sup> <a name="claimMatchOperator" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```typescript
public readonly claimMatchOperator: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#claim_match_operator BedrockagentcoreGateway#claim_match_operator}.

---

##### `claimMatchValue`<sup>Optional</sup> <a name="claimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```typescript
public readonly claimMatchValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]

claim_match_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#claim_match_value BedrockagentcoreGateway#claim_match_value}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">matchValueString</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#match_value_string BedrockagentcoreGateway#match_value_string}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">matchValueStringList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#match_value_string_list BedrockagentcoreGateway#match_value_string_list}. |

---

##### `matchValueString`<sup>Optional</sup> <a name="matchValueString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```typescript
public readonly matchValueString: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#match_value_string BedrockagentcoreGateway#match_value_string}.

---

##### `matchValueStringList`<sup>Optional</sup> <a name="matchValueStringList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```typescript
public readonly matchValueStringList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#match_value_string_list BedrockagentcoreGateway#match_value_string_list}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.managedVpcResource">managedVpcResource</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>[]</code> | managed_vpc_resource block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>[]</code> | self_managed_lattice_resource block. |

---

##### `managedVpcResource`<sup>Optional</sup> <a name="managedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.managedVpcResource"></a>

```typescript
public readonly managedVpcResource: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>[]

managed_vpc_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#managed_vpc_resource BedrockagentcoreGateway#managed_vpc_resource}

---

##### `selfManagedLatticeResource`<sup>Optional</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint.property.selfManagedLatticeResource"></a>

```typescript
public readonly selfManagedLatticeResource: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>[]

self_managed_lattice_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#self_managed_lattice_resource BedrockagentcoreGateway#self_managed_lattice_resource}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#endpoint_ip_address_type BedrockagentcoreGateway#endpoint_ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#subnet_ids BedrockagentcoreGateway#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#vpc_identifier BedrockagentcoreGateway#vpc_identifier}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.routingDomain">routingDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#routing_domain BedrockagentcoreGateway#routing_domain}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#security_group_ids BedrockagentcoreGateway#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}. |

---

##### `endpointIpAddressType`<sup>Required</sup> <a name="endpointIpAddressType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.endpointIpAddressType"></a>

```typescript
public readonly endpointIpAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#endpoint_ip_address_type BedrockagentcoreGateway#endpoint_ip_address_type}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#subnet_ids BedrockagentcoreGateway#subnet_ids}.

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#vpc_identifier BedrockagentcoreGateway#vpc_identifier}.

---

##### `routingDomain`<sup>Optional</sup> <a name="routingDomain" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.routingDomain"></a>

```typescript
public readonly routingDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#routing_domain BedrockagentcoreGateway#routing_domain}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#security_group_ids BedrockagentcoreGateway#security_group_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#domain BedrockagentcoreGateway#domain}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.privateEndpoint">privateEndpoint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>[]</code> | private_endpoint block. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#domain BedrockagentcoreGateway#domain}.

---

##### `privateEndpoint`<sup>Optional</sup> <a name="privateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>[]

private_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#private_endpoint BedrockagentcoreGateway#private_endpoint}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.managedVpcResource">managedVpcResource</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>[]</code> | managed_vpc_resource block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>[]</code> | self_managed_lattice_resource block. |

---

##### `managedVpcResource`<sup>Optional</sup> <a name="managedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.managedVpcResource"></a>

```typescript
public readonly managedVpcResource: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>[]

managed_vpc_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#managed_vpc_resource BedrockagentcoreGateway#managed_vpc_resource}

---

##### `selfManagedLatticeResource`<sup>Optional</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint.property.selfManagedLatticeResource"></a>

```typescript
public readonly selfManagedLatticeResource: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>[]

self_managed_lattice_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#self_managed_lattice_resource BedrockagentcoreGateway#self_managed_lattice_resource}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#endpoint_ip_address_type BedrockagentcoreGateway#endpoint_ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#subnet_ids BedrockagentcoreGateway#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#vpc_identifier BedrockagentcoreGateway#vpc_identifier}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.routingDomain">routingDomain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#routing_domain BedrockagentcoreGateway#routing_domain}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#security_group_ids BedrockagentcoreGateway#security_group_ids}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}. |

---

##### `endpointIpAddressType`<sup>Required</sup> <a name="endpointIpAddressType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.endpointIpAddressType"></a>

```typescript
public readonly endpointIpAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#endpoint_ip_address_type BedrockagentcoreGateway#endpoint_ip_address_type}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#subnet_ids BedrockagentcoreGateway#subnet_ids}.

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#vpc_identifier BedrockagentcoreGateway#vpc_identifier}.

---

##### `routingDomain`<sup>Optional</sup> <a name="routingDomain" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.routingDomain"></a>

```typescript
public readonly routingDomain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#routing_domain BedrockagentcoreGateway#routing_domain}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#security_group_ids BedrockagentcoreGateway#security_group_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#resource_configuration_identifier BedrockagentcoreGateway#resource_configuration_identifier}. |

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier"></a>

```typescript
public readonly resourceConfigurationIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#resource_configuration_identifier BedrockagentcoreGateway#resource_configuration_identifier}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#resource_configuration_identifier BedrockagentcoreGateway#resource_configuration_identifier}. |

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource.property.resourceConfigurationIdentifier"></a>

```typescript
public readonly resourceConfigurationIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#resource_configuration_identifier BedrockagentcoreGateway#resource_configuration_identifier}.

---

### BedrockagentcoreGatewayConfig <a name="BedrockagentcoreGatewayConfig" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayConfig: bedrockagentcoreGateway.BedrockagentcoreGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerType">authorizerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>[]</code> | authorizer_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.exceptionLevel">exceptionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.interceptorConfiguration">interceptorConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration">BedrockagentcoreGatewayInterceptorConfiguration</a>[]</code> | interceptor_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.policyEngineConfiguration">policyEngineConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>[]</code> | policy_engine_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolConfiguration">protocolConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>[]</code> | protocol_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerType"></a>

```typescript
public readonly authorizerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}.

---

##### `authorizerConfiguration`<sup>Optional</sup> <a name="authorizerConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerConfiguration"></a>

```typescript
public readonly authorizerConfiguration: IResolvable | BedrockagentcoreGatewayAuthorizerConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>[]

authorizer_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#authorizer_configuration BedrockagentcoreGateway#authorizer_configuration}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}.

---

##### `exceptionLevel`<sup>Optional</sup> <a name="exceptionLevel" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.exceptionLevel"></a>

```typescript
public readonly exceptionLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}.

---

##### `interceptorConfiguration`<sup>Optional</sup> <a name="interceptorConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.interceptorConfiguration"></a>

```typescript
public readonly interceptorConfiguration: IResolvable | BedrockagentcoreGatewayInterceptorConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration">BedrockagentcoreGatewayInterceptorConfiguration</a>[]

interceptor_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#interceptor_configuration BedrockagentcoreGateway#interceptor_configuration}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}.

---

##### `policyEngineConfiguration`<sup>Optional</sup> <a name="policyEngineConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.policyEngineConfiguration"></a>

```typescript
public readonly policyEngineConfiguration: IResolvable | BedrockagentcoreGatewayPolicyEngineConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>[]

policy_engine_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#policy_engine_configuration BedrockagentcoreGateway#policy_engine_configuration}

---

##### `protocolConfiguration`<sup>Optional</sup> <a name="protocolConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolConfiguration"></a>

```typescript
public readonly protocolConfiguration: IResolvable | BedrockagentcoreGatewayProtocolConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>[]

protocol_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#protocol_configuration BedrockagentcoreGateway#protocol_configuration}

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#region BedrockagentcoreGateway#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.timeouts"></a>

```typescript
public readonly timeouts: BedrockagentcoreGatewayTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#timeouts BedrockagentcoreGateway#timeouts}

---

### BedrockagentcoreGatewayInterceptorConfiguration <a name="BedrockagentcoreGatewayInterceptorConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayInterceptorConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration.property.interceptionPoints">interceptionPoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#interception_points BedrockagentcoreGateway#interception_points}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration.property.inputConfiguration">inputConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration</a>[]</code> | input_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration.property.interceptor">interceptor</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor">BedrockagentcoreGatewayInterceptorConfigurationInterceptor</a>[]</code> | interceptor block. |

---

##### `interceptionPoints`<sup>Required</sup> <a name="interceptionPoints" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration.property.interceptionPoints"></a>

```typescript
public readonly interceptionPoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#interception_points BedrockagentcoreGateway#interception_points}.

---

##### `inputConfiguration`<sup>Optional</sup> <a name="inputConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration.property.inputConfiguration"></a>

```typescript
public readonly inputConfiguration: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration</a>[]

input_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#input_configuration BedrockagentcoreGateway#input_configuration}

---

##### `interceptor`<sup>Optional</sup> <a name="interceptor" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration.property.interceptor"></a>

```typescript
public readonly interceptor: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptor[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor">BedrockagentcoreGatewayInterceptorConfigurationInterceptor</a>[]

interceptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#interceptor BedrockagentcoreGateway#interceptor}

---

### BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration <a name="BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayInterceptorConfigurationInputConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration.property.passRequestHeaders">passRequestHeaders</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#pass_request_headers BedrockagentcoreGateway#pass_request_headers}. |

---

##### `passRequestHeaders`<sup>Required</sup> <a name="passRequestHeaders" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration.property.passRequestHeaders"></a>

```typescript
public readonly passRequestHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#pass_request_headers BedrockagentcoreGateway#pass_request_headers}.

---

### BedrockagentcoreGatewayInterceptorConfigurationInterceptor <a name="BedrockagentcoreGatewayInterceptorConfigurationInterceptor" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayInterceptorConfigurationInterceptor: bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor.property.lambda">lambda</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda</a>[]</code> | lambda block. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor.property.lambda"></a>

```typescript
public readonly lambda: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda</a>[]

lambda block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#lambda BedrockagentcoreGateway#lambda}

---

### BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda <a name="BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda: bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}.

---

### BedrockagentcoreGatewayPolicyEngineConfiguration <a name="BedrockagentcoreGatewayPolicyEngineConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayPolicyEngineConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#mode BedrockagentcoreGateway#mode}. |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#mode BedrockagentcoreGateway#mode}.

---

### BedrockagentcoreGatewayProtocolConfiguration <a name="BedrockagentcoreGatewayProtocolConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayProtocolConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.property.mcp">mcp</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>[]</code> | mcp block. |

---

##### `mcp`<sup>Optional</sup> <a name="mcp" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.property.mcp"></a>

```typescript
public readonly mcp: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcp[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>[]

mcp block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#mcp BedrockagentcoreGateway#mcp}

---

### BedrockagentcoreGatewayProtocolConfigurationMcp <a name="BedrockagentcoreGatewayProtocolConfigurationMcp" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayProtocolConfigurationMcp: bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.instructions">instructions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.searchType">searchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.sessionConfiguration">sessionConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>[]</code> | session_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.streamingConfiguration">streamingConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>[]</code> | streaming_configuration block. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.supportedVersions">supportedVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}. |

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}.

---

##### `searchType`<sup>Optional</sup> <a name="searchType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.searchType"></a>

```typescript
public readonly searchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}.

---

##### `sessionConfiguration`<sup>Optional</sup> <a name="sessionConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.sessionConfiguration"></a>

```typescript
public readonly sessionConfiguration: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>[]

session_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#session_configuration BedrockagentcoreGateway#session_configuration}

---

##### `streamingConfiguration`<sup>Optional</sup> <a name="streamingConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.streamingConfiguration"></a>

```typescript
public readonly streamingConfiguration: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>[]

streaming_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#streaming_configuration BedrockagentcoreGateway#streaming_configuration}

---

##### `supportedVersions`<sup>Optional</sup> <a name="supportedVersions" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.supportedVersions"></a>

```typescript
public readonly supportedVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}.

---

### BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration <a name="BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration.property.sessionTimeoutInSeconds">sessionTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#session_timeout_in_seconds BedrockagentcoreGateway#session_timeout_in_seconds}. |

---

##### `sessionTimeoutInSeconds`<sup>Optional</sup> <a name="sessionTimeoutInSeconds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration.property.sessionTimeoutInSeconds"></a>

```typescript
public readonly sessionTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#session_timeout_in_seconds BedrockagentcoreGateway#session_timeout_in_seconds}.

---

### BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration <a name="BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration.property.enableResponseStreaming">enableResponseStreaming</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#enable_response_streaming BedrockagentcoreGateway#enable_response_streaming}. |

---

##### `enableResponseStreaming`<sup>Optional</sup> <a name="enableResponseStreaming" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration.property.enableResponseStreaming"></a>

```typescript
public readonly enableResponseStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#enable_response_streaming BedrockagentcoreGateway#enable_response_streaming}.

---

### BedrockagentcoreGatewayTimeouts <a name="BedrockagentcoreGatewayTimeouts" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayTimeouts: bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#create BedrockagentcoreGateway#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#delete BedrockagentcoreGateway#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/bedrockagentcore_gateway#update BedrockagentcoreGateway#update}

---

### BedrockagentcoreGatewayWorkloadIdentityDetails <a name="BedrockagentcoreGatewayWorkloadIdentityDetails" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

const bedrockagentcoreGatewayWorkloadIdentityDetails: bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.putHostingEnvironment">putHostingEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetHostingEnvironment">resetHostingEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetWorkloadIdentities">resetWorkloadIdentities</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHostingEnvironment` <a name="putHostingEnvironment" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.putHostingEnvironment"></a>

```typescript
public putHostingEnvironment(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.putHostingEnvironment.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment</a>[]

---

##### `resetHostingEnvironment` <a name="resetHostingEnvironment" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetHostingEnvironment"></a>

```typescript
public resetHostingEnvironment(): void
```

##### `resetWorkloadIdentities` <a name="resetWorkloadIdentities" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.resetWorkloadIdentities"></a>

```typescript
public resetWorkloadIdentities(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironment">hostingEnvironment</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironmentInput">hostingEnvironmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentitiesInput">workloadIdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentities">workloadIdentities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostingEnvironment`<sup>Required</sup> <a name="hostingEnvironment" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironment"></a>

```typescript
public readonly hostingEnvironment: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironmentList</a>

---

##### `hostingEnvironmentInput`<sup>Optional</sup> <a name="hostingEnvironmentInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.hostingEnvironmentInput"></a>

```typescript
public readonly hostingEnvironmentInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationHostingEnvironment</a>[]

---

##### `workloadIdentitiesInput`<sup>Optional</sup> <a name="workloadIdentitiesInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentitiesInput"></a>

```typescript
public readonly workloadIdentitiesInput: string[];
```

- *Type:* string[]

---

##### `workloadIdentities`<sup>Required</sup> <a name="workloadIdentities" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.workloadIdentities"></a>

```typescript
public readonly workloadIdentities: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">resetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">resetMatchValueStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValueString` <a name="resetMatchValueString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```typescript
public resetMatchValueString(): void
```

##### `resetMatchValueStringList` <a name="resetMatchValueStringList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```typescript
public resetMatchValueStringList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">matchValueStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">matchValueStringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">matchValueString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">matchValueStringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValueStringInput`<sup>Optional</sup> <a name="matchValueStringInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```typescript
public readonly matchValueStringInput: string;
```

- *Type:* string

---

##### `matchValueStringListInput`<sup>Optional</sup> <a name="matchValueStringListInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```typescript
public readonly matchValueStringListInput: string[];
```

- *Type:* string[]

---

##### `matchValueString`<sup>Required</sup> <a name="matchValueString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```typescript
public readonly matchValueString: string;
```

- *Type:* string

---

##### `matchValueStringList`<sup>Required</sup> <a name="matchValueStringList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```typescript
public readonly matchValueStringList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">putClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">resetClaimMatchValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaimMatchValue` <a name="putClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```typescript
public putClaimMatchValue(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]

---

##### `resetClaimMatchValue` <a name="resetClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```typescript
public resetClaimMatchValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">claimMatchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">claimMatchValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">claimMatchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claimMatchValue`<sup>Required</sup> <a name="claimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```typescript
public readonly claimMatchValue: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValueList</a>

---

##### `claimMatchOperatorInput`<sup>Optional</sup> <a name="claimMatchOperatorInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```typescript
public readonly claimMatchOperatorInput: string;
```

- *Type:* string

---

##### `claimMatchValueInput`<sup>Optional</sup> <a name="claimMatchValueInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```typescript
public readonly claimMatchValueInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueClaimMatchValue</a>[]

---

##### `claimMatchOperator`<sup>Required</sup> <a name="claimMatchOperator" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```typescript
public readonly claimMatchOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.putAuthorizingClaimMatchValue">putAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resetAuthorizingClaimMatchValue">resetAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizingClaimMatchValue` <a name="putAuthorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.putAuthorizingClaimMatchValue"></a>

```typescript
public putAuthorizingClaimMatchValue(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]

---

##### `resetAuthorizingClaimMatchValue` <a name="resetAuthorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.resetAuthorizingClaimMatchValue"></a>

```typescript
public resetAuthorizingClaimMatchValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValueInput">authorizingClaimMatchValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimNameInput">inboundTokenClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueTypeInput">inboundTokenClaimValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizingClaimMatchValue`<sup>Required</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValue"></a>

```typescript
public readonly authorizingClaimMatchValue: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValueList</a>

---

##### `authorizingClaimMatchValueInput`<sup>Optional</sup> <a name="authorizingClaimMatchValueInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.authorizingClaimMatchValueInput"></a>

```typescript
public readonly authorizingClaimMatchValueInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimAuthorizingClaimMatchValue</a>[]

---

##### `inboundTokenClaimNameInput`<sup>Optional</sup> <a name="inboundTokenClaimNameInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimNameInput"></a>

```typescript
public readonly inboundTokenClaimNameInput: string;
```

- *Type:* string

---

##### `inboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="inboundTokenClaimValueTypeInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```typescript
public readonly inboundTokenClaimValueTypeInput: string;
```

- *Type:* string

---

##### `inboundTokenClaimName`<sup>Required</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimName"></a>

```typescript
public readonly inboundTokenClaimName: string;
```

- *Type:* string

---

##### `inboundTokenClaimValueType`<sup>Required</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.inboundTokenClaimValueType"></a>

```typescript
public readonly inboundTokenClaimValueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putAllowedWorkloadConfiguration">putAllowedWorkloadConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaim">putCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint">putPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverrides">putPrivateEndpointOverrides</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">resetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">resetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">resetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedWorkloadConfiguration">resetAllowedWorkloadConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaim">resetCustomClaim</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpoint">resetPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpointOverrides">resetPrivateEndpointOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllowedWorkloadConfiguration` <a name="putAllowedWorkloadConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putAllowedWorkloadConfiguration"></a>

```typescript
public putAllowedWorkloadConfiguration(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putAllowedWorkloadConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>[]

---

##### `putCustomClaim` <a name="putCustomClaim" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaim"></a>

```typescript
public putCustomClaim(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaim.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]

---

##### `putPrivateEndpoint` <a name="putPrivateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint"></a>

```typescript
public putPrivateEndpoint(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpoint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>[]

---

##### `putPrivateEndpointOverrides` <a name="putPrivateEndpointOverrides" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverrides"></a>

```typescript
public putPrivateEndpointOverrides(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putPrivateEndpointOverrides.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]

---

##### `resetAllowedAudience` <a name="resetAllowedAudience" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```typescript
public resetAllowedAudience(): void
```

##### `resetAllowedClients` <a name="resetAllowedClients" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```typescript
public resetAllowedClients(): void
```

##### `resetAllowedScopes` <a name="resetAllowedScopes" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```typescript
public resetAllowedScopes(): void
```

##### `resetAllowedWorkloadConfiguration` <a name="resetAllowedWorkloadConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedWorkloadConfiguration"></a>

```typescript
public resetAllowedWorkloadConfiguration(): void
```

##### `resetCustomClaim` <a name="resetCustomClaim" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaim"></a>

```typescript
public resetCustomClaim(): void
```

##### `resetPrivateEndpoint` <a name="resetPrivateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpoint"></a>

```typescript
public resetPrivateEndpoint(): void
```

##### `resetPrivateEndpointOverrides` <a name="resetPrivateEndpointOverrides" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetPrivateEndpointOverrides"></a>

```typescript
public resetPrivateEndpointOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfiguration">allowedWorkloadConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim">customClaim</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverrides">privateEndpointOverrides</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">allowedAudienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">allowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfigurationInput">allowedWorkloadConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimInput">customClaimInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointInput">privateEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverridesInput">privateEndpointOverridesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowedAudience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowedWorkloadConfiguration`<sup>Required</sup> <a name="allowedWorkloadConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfiguration"></a>

```typescript
public readonly allowedWorkloadConfiguration: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfigurationList</a>

---

##### `customClaim`<sup>Required</sup> <a name="customClaim" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaim"></a>

```typescript
public readonly customClaim: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimList</a>

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList</a>

---

##### `privateEndpointOverrides`<sup>Required</sup> <a name="privateEndpointOverrides" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverrides"></a>

```typescript
public readonly privateEndpointOverrides: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList</a>

---

##### `allowedAudienceInput`<sup>Optional</sup> <a name="allowedAudienceInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```typescript
public readonly allowedAudienceInput: string[];
```

- *Type:* string[]

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```typescript
public readonly allowedClientsInput: string[];
```

- *Type:* string[]

---

##### `allowedScopesInput`<sup>Optional</sup> <a name="allowedScopesInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```typescript
public readonly allowedScopesInput: string[];
```

- *Type:* string[]

---

##### `allowedWorkloadConfigurationInput`<sup>Optional</sup> <a name="allowedWorkloadConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedWorkloadConfigurationInput"></a>

```typescript
public readonly allowedWorkloadConfigurationInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerAllowedWorkloadConfiguration</a>[]

---

##### `customClaimInput`<sup>Optional</sup> <a name="customClaimInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimInput"></a>

```typescript
public readonly customClaimInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaim</a>[]

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```typescript
public readonly discoveryUrlInput: string;
```

- *Type:* string

---

##### `privateEndpointInput`<sup>Optional</sup> <a name="privateEndpointInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointInput"></a>

```typescript
public readonly privateEndpointInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>[]

---

##### `privateEndpointOverridesInput`<sup>Optional</sup> <a name="privateEndpointOverridesInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.privateEndpointOverridesInput"></a>

```typescript
public readonly privateEndpointOverridesInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]

---

##### `allowedAudience`<sup>Required</sup> <a name="allowedAudience" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```typescript
public readonly allowedAudience: string[];
```

- *Type:* string[]

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```typescript
public readonly allowedClients: string[];
```

- *Type:* string[]

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
```

- *Type:* string[]

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain">resetRoutingDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoutingDomain` <a name="resetRoutingDomain" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain"></a>

```typescript
public resetRoutingDomain(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput">endpointIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput">routingDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput">vpcIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">routingDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointIpAddressTypeInput`<sup>Optional</sup> <a name="endpointIpAddressTypeInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput"></a>

```typescript
public readonly endpointIpAddressTypeInput: string;
```

- *Type:* string

---

##### `routingDomainInput`<sup>Optional</sup> <a name="routingDomainInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput"></a>

```typescript
public readonly routingDomainInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdentifierInput`<sup>Optional</sup> <a name="vpcIdentifierInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput"></a>

```typescript
public readonly vpcIdentifierInput: string;
```

- *Type:* string

---

##### `endpointIpAddressType`<sup>Required</sup> <a name="endpointIpAddressType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```typescript
public readonly endpointIpAddressType: string;
```

- *Type:* string

---

##### `routingDomain`<sup>Required</sup> <a name="routingDomain" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```typescript
public readonly routingDomain: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource">putManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource">putSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetManagedVpcResource">resetManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetSelfManagedLatticeResource">resetSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedVpcResource` <a name="putManagedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource"></a>

```typescript
public putManagedVpcResource(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putManagedVpcResource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>[]

---

##### `putSelfManagedLatticeResource` <a name="putSelfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource"></a>

```typescript
public putSelfManagedLatticeResource(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.putSelfManagedLatticeResource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>[]

---

##### `resetManagedVpcResource` <a name="resetManagedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetManagedVpcResource"></a>

```typescript
public resetManagedVpcResource(): void
```

##### `resetSelfManagedLatticeResource` <a name="resetSelfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.resetSelfManagedLatticeResource"></a>

```typescript
public resetSelfManagedLatticeResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource">managedVpcResource</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResourceInput">managedVpcResourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput">selfManagedLatticeResourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedVpcResource`<sup>Required</sup> <a name="managedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResource"></a>

```typescript
public readonly managedVpcResource: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResourceList</a>

---

##### `selfManagedLatticeResource`<sup>Required</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```typescript
public readonly selfManagedLatticeResource: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList</a>

---

##### `managedVpcResourceInput`<sup>Optional</sup> <a name="managedVpcResourceInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.managedVpcResourceInput"></a>

```typescript
public readonly managedVpcResourceInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointManagedVpcResource</a>[]

---

##### `selfManagedLatticeResourceInput`<sup>Optional</sup> <a name="selfManagedLatticeResourceInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput"></a>

```typescript
public readonly selfManagedLatticeResourceInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpoint</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.putPrivateEndpoint">putPrivateEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetPrivateEndpoint">resetPrivateEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrivateEndpoint` <a name="putPrivateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.putPrivateEndpoint"></a>

```typescript
public putPrivateEndpoint(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.putPrivateEndpoint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>[]

---

##### `resetPrivateEndpoint` <a name="resetPrivateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.resetPrivateEndpoint"></a>

```typescript
public resetPrivateEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpoint">privateEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpointInput">privateEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList</a>

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `privateEndpointInput`<sup>Optional</sup> <a name="privateEndpointInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.privateEndpointInput"></a>

```typescript
public readonly privateEndpointInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>[]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverrides</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain">resetRoutingDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRoutingDomain` <a name="resetRoutingDomain" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetRoutingDomain"></a>

```typescript
public resetRoutingDomain(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput">endpointIpAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput">routingDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput">vpcIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType">endpointIpAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain">routingDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier">vpcIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointIpAddressTypeInput`<sup>Optional</sup> <a name="endpointIpAddressTypeInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressTypeInput"></a>

```typescript
public readonly endpointIpAddressTypeInput: string;
```

- *Type:* string

---

##### `routingDomainInput`<sup>Optional</sup> <a name="routingDomainInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomainInput"></a>

```typescript
public readonly routingDomainInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdentifierInput`<sup>Optional</sup> <a name="vpcIdentifierInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifierInput"></a>

```typescript
public readonly vpcIdentifierInput: string;
```

- *Type:* string

---

##### `endpointIpAddressType`<sup>Required</sup> <a name="endpointIpAddressType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.endpointIpAddressType"></a>

```typescript
public readonly endpointIpAddressType: string;
```

- *Type:* string

---

##### `routingDomain`<sup>Required</sup> <a name="routingDomain" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.routingDomain"></a>

```typescript
public readonly routingDomain: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpcIdentifier`<sup>Required</sup> <a name="vpcIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.vpcIdentifier"></a>

```typescript
public readonly vpcIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putManagedVpcResource">putManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putSelfManagedLatticeResource">putSelfManagedLatticeResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetManagedVpcResource">resetManagedVpcResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetSelfManagedLatticeResource">resetSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putManagedVpcResource` <a name="putManagedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putManagedVpcResource"></a>

```typescript
public putManagedVpcResource(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putManagedVpcResource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>[]

---

##### `putSelfManagedLatticeResource` <a name="putSelfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putSelfManagedLatticeResource"></a>

```typescript
public putSelfManagedLatticeResource(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.putSelfManagedLatticeResource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>[]

---

##### `resetManagedVpcResource` <a name="resetManagedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetManagedVpcResource"></a>

```typescript
public resetManagedVpcResource(): void
```

##### `resetSelfManagedLatticeResource` <a name="resetSelfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.resetSelfManagedLatticeResource"></a>

```typescript
public resetSelfManagedLatticeResource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResource">managedVpcResource</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResource">selfManagedLatticeResource</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResourceInput">managedVpcResourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput">selfManagedLatticeResourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedVpcResource`<sup>Required</sup> <a name="managedVpcResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResource"></a>

```typescript
public readonly managedVpcResource: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResourceList</a>

---

##### `selfManagedLatticeResource`<sup>Required</sup> <a name="selfManagedLatticeResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResource"></a>

```typescript
public readonly selfManagedLatticeResource: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList</a>

---

##### `managedVpcResourceInput`<sup>Optional</sup> <a name="managedVpcResourceInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.managedVpcResourceInput"></a>

```typescript
public readonly managedVpcResourceInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointManagedVpcResource</a>[]

---

##### `selfManagedLatticeResourceInput`<sup>Optional</sup> <a name="selfManagedLatticeResourceInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.selfManagedLatticeResourceInput"></a>

```typescript
public readonly selfManagedLatticeResourceInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpoint</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput">resourceConfigurationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="resourceConfigurationIdentifierInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput"></a>

```typescript
public readonly resourceConfigurationIdentifierInput: string;
```

- *Type:* string

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```typescript
public readonly resourceConfigurationIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointOverridesPrivateEndpointSelfManagedLatticeResource</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput">resourceConfigurationIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier">resourceConfigurationIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resourceConfigurationIdentifierInput`<sup>Optional</sup> <a name="resourceConfigurationIdentifierInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifierInput"></a>

```typescript
public readonly resourceConfigurationIdentifierInput: string;
```

- *Type:* string

---

##### `resourceConfigurationIdentifier`<sup>Required</sup> <a name="resourceConfigurationIdentifier" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.resourceConfigurationIdentifier"></a>

```typescript
public readonly resourceConfigurationIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerPrivateEndpointSelfManagedLatticeResource</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationList <a name="BedrockagentcoreGatewayAuthorizerConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">putCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">resetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomJwtAuthorizer` <a name="putCustomJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```typescript
public putCustomJwtAuthorizer(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>[]

---

##### `resetCustomJwtAuthorizer` <a name="resetCustomJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```typescript
public resetCustomJwtAuthorizer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">customJwtAuthorizerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customJwtAuthorizer`<sup>Required</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```typescript
public readonly customJwtAuthorizer: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerList</a>

---

##### `customJwtAuthorizerInput`<sup>Optional</sup> <a name="customJwtAuthorizerInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```typescript
public readonly customJwtAuthorizerInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>

---


### BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList <a name="BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration</a>[]

---


### BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.passRequestHeadersInput">passRequestHeadersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.passRequestHeaders">passRequestHeaders</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passRequestHeadersInput`<sup>Optional</sup> <a name="passRequestHeadersInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.passRequestHeadersInput"></a>

```typescript
public readonly passRequestHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `passRequestHeaders`<sup>Required</sup> <a name="passRequestHeaders" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.passRequestHeaders"></a>

```typescript
public readonly passRequestHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration</a>

---


### BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList <a name="BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda</a>[]

---


### BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda</a>

---


### BedrockagentcoreGatewayInterceptorConfigurationInterceptorList <a name="BedrockagentcoreGatewayInterceptorConfigurationInterceptorList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor">BedrockagentcoreGatewayInterceptorConfigurationInterceptor</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptor[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor">BedrockagentcoreGatewayInterceptorConfigurationInterceptor</a>[]

---


### BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambda` <a name="putLambda" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.putLambda"></a>

```typescript
public putLambda(value: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.putLambda.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda</a>[]

---

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.resetLambda"></a>

```typescript
public resetLambda(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor">BedrockagentcoreGatewayInterceptorConfigurationInterceptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.lambda"></a>

```typescript
public readonly lambda: BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambdaList</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationInterceptorLambda</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor">BedrockagentcoreGatewayInterceptorConfigurationInterceptor</a>

---


### BedrockagentcoreGatewayInterceptorConfigurationList <a name="BedrockagentcoreGatewayInterceptorConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration">BedrockagentcoreGatewayInterceptorConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration">BedrockagentcoreGatewayInterceptorConfiguration</a>[]

---


### BedrockagentcoreGatewayInterceptorConfigurationOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.putInputConfiguration">putInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.putInterceptor">putInterceptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.resetInputConfiguration">resetInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.resetInterceptor">resetInterceptor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputConfiguration` <a name="putInputConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.putInputConfiguration"></a>

```typescript
public putInputConfiguration(value: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.putInputConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration</a>[]

---

##### `putInterceptor` <a name="putInterceptor" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.putInterceptor"></a>

```typescript
public putInterceptor(value: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptor[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.putInterceptor.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor">BedrockagentcoreGatewayInterceptorConfigurationInterceptor</a>[]

---

##### `resetInputConfiguration` <a name="resetInputConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.resetInputConfiguration"></a>

```typescript
public resetInputConfiguration(): void
```

##### `resetInterceptor` <a name="resetInterceptor" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.resetInterceptor"></a>

```typescript
public resetInterceptor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.inputConfiguration">inputConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList">BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.interceptor">interceptor</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList">BedrockagentcoreGatewayInterceptorConfigurationInterceptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.inputConfigurationInput">inputConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.interceptionPointsInput">interceptionPointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.interceptorInput">interceptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor">BedrockagentcoreGatewayInterceptorConfigurationInterceptor</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.interceptionPoints">interceptionPoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration">BedrockagentcoreGatewayInterceptorConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputConfiguration`<sup>Required</sup> <a name="inputConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.inputConfiguration"></a>

```typescript
public readonly inputConfiguration: BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList">BedrockagentcoreGatewayInterceptorConfigurationInputConfigurationList</a>

---

##### `interceptor`<sup>Required</sup> <a name="interceptor" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.interceptor"></a>

```typescript
public readonly interceptor: BedrockagentcoreGatewayInterceptorConfigurationInterceptorList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptorList">BedrockagentcoreGatewayInterceptorConfigurationInterceptorList</a>

---

##### `inputConfigurationInput`<sup>Optional</sup> <a name="inputConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.inputConfigurationInput"></a>

```typescript
public readonly inputConfigurationInput: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationInputConfiguration</a>[]

---

##### `interceptionPointsInput`<sup>Optional</sup> <a name="interceptionPointsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.interceptionPointsInput"></a>

```typescript
public readonly interceptionPointsInput: string[];
```

- *Type:* string[]

---

##### `interceptorInput`<sup>Optional</sup> <a name="interceptorInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.interceptorInput"></a>

```typescript
public readonly interceptorInput: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationInterceptor[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationInterceptor">BedrockagentcoreGatewayInterceptorConfigurationInterceptor</a>[]

---

##### `interceptionPoints`<sup>Required</sup> <a name="interceptionPoints" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.interceptionPoints"></a>

```typescript
public readonly interceptionPoints: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfiguration">BedrockagentcoreGatewayInterceptorConfiguration</a>

---


### BedrockagentcoreGatewayPolicyEngineConfigurationList <a name="BedrockagentcoreGatewayPolicyEngineConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayPolicyEngineConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>[]

---


### BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference <a name="BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayPolicyEngineConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>

---


### BedrockagentcoreGatewayProtocolConfigurationList <a name="BedrockagentcoreGatewayProtocolConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayProtocolConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>[]

---


### BedrockagentcoreGatewayProtocolConfigurationMcpList <a name="BedrockagentcoreGatewayProtocolConfigurationMcpList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcp[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>[]

---


### BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putSessionConfiguration">putSessionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putStreamingConfiguration">putStreamingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetInstructions">resetInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSearchType">resetSearchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSessionConfiguration">resetSessionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetStreamingConfiguration">resetStreamingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSupportedVersions">resetSupportedVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionConfiguration` <a name="putSessionConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putSessionConfiguration"></a>

```typescript
public putSessionConfiguration(value: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putSessionConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>[]

---

##### `putStreamingConfiguration` <a name="putStreamingConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putStreamingConfiguration"></a>

```typescript
public putStreamingConfiguration(value: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putStreamingConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>[]

---

##### `resetInstructions` <a name="resetInstructions" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetInstructions"></a>

```typescript
public resetInstructions(): void
```

##### `resetSearchType` <a name="resetSearchType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSearchType"></a>

```typescript
public resetSearchType(): void
```

##### `resetSessionConfiguration` <a name="resetSessionConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSessionConfiguration"></a>

```typescript
public resetSessionConfiguration(): void
```

##### `resetStreamingConfiguration` <a name="resetStreamingConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetStreamingConfiguration"></a>

```typescript
public resetStreamingConfiguration(): void
```

##### `resetSupportedVersions` <a name="resetSupportedVersions" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSupportedVersions"></a>

```typescript
public resetSupportedVersions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfiguration">sessionConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfiguration">streamingConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructionsInput">instructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchTypeInput">searchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfigurationInput">sessionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfigurationInput">streamingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersionsInput">supportedVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructions">instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchType">searchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersions">supportedVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionConfiguration`<sup>Required</sup> <a name="sessionConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfiguration"></a>

```typescript
public readonly sessionConfiguration: BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList</a>

---

##### `streamingConfiguration`<sup>Required</sup> <a name="streamingConfiguration" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfiguration"></a>

```typescript
public readonly streamingConfiguration: BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList</a>

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructionsInput"></a>

```typescript
public readonly instructionsInput: string;
```

- *Type:* string

---

##### `searchTypeInput`<sup>Optional</sup> <a name="searchTypeInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchTypeInput"></a>

```typescript
public readonly searchTypeInput: string;
```

- *Type:* string

---

##### `sessionConfigurationInput`<sup>Optional</sup> <a name="sessionConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfigurationInput"></a>

```typescript
public readonly sessionConfigurationInput: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>[]

---

##### `streamingConfigurationInput`<sup>Optional</sup> <a name="streamingConfigurationInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfigurationInput"></a>

```typescript
public readonly streamingConfigurationInput: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>[]

---

##### `supportedVersionsInput`<sup>Optional</sup> <a name="supportedVersionsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersionsInput"></a>

```typescript
public readonly supportedVersionsInput: string[];
```

- *Type:* string[]

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

---

##### `searchType`<sup>Required</sup> <a name="searchType" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchType"></a>

```typescript
public readonly searchType: string;
```

- *Type:* string

---

##### `supportedVersions`<sup>Required</sup> <a name="supportedVersions" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersions"></a>

```typescript
public readonly supportedVersions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>

---


### BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList <a name="BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>[]

---


### BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resetSessionTimeoutInSeconds">resetSessionTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSessionTimeoutInSeconds` <a name="resetSessionTimeoutInSeconds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resetSessionTimeoutInSeconds"></a>

```typescript
public resetSessionTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSecondsInput">sessionTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSeconds">sessionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionTimeoutInSecondsInput`<sup>Optional</sup> <a name="sessionTimeoutInSecondsInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSecondsInput"></a>

```typescript
public readonly sessionTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `sessionTimeoutInSeconds`<sup>Required</sup> <a name="sessionTimeoutInSeconds" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSeconds"></a>

```typescript
public readonly sessionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>

---


### BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList <a name="BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>[]

---


### BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resetEnableResponseStreaming">resetEnableResponseStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableResponseStreaming` <a name="resetEnableResponseStreaming" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resetEnableResponseStreaming"></a>

```typescript
public resetEnableResponseStreaming(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreamingInput">enableResponseStreamingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreaming">enableResponseStreaming</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableResponseStreamingInput`<sup>Optional</sup> <a name="enableResponseStreamingInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreamingInput"></a>

```typescript
public readonly enableResponseStreamingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableResponseStreaming`<sup>Required</sup> <a name="enableResponseStreaming" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreaming"></a>

```typescript
public readonly enableResponseStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>

---


### BedrockagentcoreGatewayProtocolConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp">putMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resetMcp">resetMcp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMcp` <a name="putMcp" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp"></a>

```typescript
public putMcp(value: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcp[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>[]

---

##### `resetMcp` <a name="resetMcp" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resetMcp"></a>

```typescript
public resetMcp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList">BedrockagentcoreGatewayProtocolConfigurationMcpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcpInput">mcpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcp`<sup>Required</sup> <a name="mcp" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcp"></a>

```typescript
public readonly mcp: BedrockagentcoreGatewayProtocolConfigurationMcpList;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpList">BedrockagentcoreGatewayProtocolConfigurationMcpList</a>

---

##### `mcpInput`<sup>Optional</sup> <a name="mcpInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcpInput"></a>

```typescript
public readonly mcpInput: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcp[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>

---


### BedrockagentcoreGatewayTimeoutsOutputReference <a name="BedrockagentcoreGatewayTimeoutsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayTimeouts">BedrockagentcoreGatewayTimeouts</a>

---


### BedrockagentcoreGatewayWorkloadIdentityDetailsList <a name="BedrockagentcoreGatewayWorkloadIdentityDetailsList" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference <a name="BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-aws'

new bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">workloadIdentityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails">BedrockagentcoreGatewayWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workloadIdentityArn`<sup>Required</sup> <a name="workloadIdentityArn" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```typescript
public readonly workloadIdentityArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcoreGatewayWorkloadIdentityDetails;
```

- *Type:* <a href="#@cdktn/provider-aws.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails">BedrockagentcoreGatewayWorkloadIdentityDetails</a>

---



